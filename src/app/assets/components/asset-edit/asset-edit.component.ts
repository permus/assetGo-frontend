import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AssetService } from '../../services/asset.service';
import { Location as angularLocation } from '@angular/common';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-asset-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './asset-edit.component.html',
  styleUrl: './asset-edit.component.scss'
})
export class AssetEditComponent implements OnInit, OnDestroy, AfterViewInit {
  private destroy$ = new Subject<void>();
  @ViewChildren('dateInput') dateInputs!: QueryList<ElementRef>;
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;

  // Flatpickr instances
  flatpickrInstances: any[] = [];

  // Asset data
  asset: any = null;
  assetForm: FormGroup;
  
  // Loading states
  loading = true;
  saving = false;
  error = '';
  successMessage = '';
  
  // Dropdown data
  categories: any[] = [];
  locations: any[] = [];
  departments: any[] = [];
  availableTags: any[] = [];
  statusOptionsFromAPI: any[] = [];
  
  // Dropdown state
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
  
  // Asset types
  assetTypes = [
    { value: 'fixed', label: 'Fixed Asset', icon: 'building-office-2', color: '#2563eb', description: 'Permanent assets like buildings and machinery' },
    { value: 'semi-fixed', label: 'Semi-Fixed Asset', icon: 'cube', color: '#22c55e', description: 'Assets that can be moved but are typically stationary' },
    { value: 'mobile', label: 'Mobile Asset', icon: 'cog', color: '#f59e42', description: 'Portable equipment and tools' },
    { value: 'fleet', label: 'Fleet Asset', icon: 'car', color: '#a855f7', description: 'Vehicles and transportation equipment' }
  ];

  // Status options
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

  // Image handling
  previewImage: string | null = null;
  selectedFile: File | null = null;
  images: File[] = [];
  imagePreviewUrls: string[] = [];
  isDragOver = false;

  // Validation errors
  nameError: string = '';
  assetTypeError: string = '';
  categoryError: string = '';
  serialNumberError: string = '';
  submitError: string = '';
  submitSuccess: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private assetService: AssetService,
    private angularLocation: angularLocation
  ) {
    this.assetForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      serial_number: ['', [Validators.required, Validators.minLength(3)]],
      model: [''],
      manufacturer: [''],
      purchase_date: [''],
      purchase_price: [null],
      depreciation: [null],
      location_id: [null],
      department_id: [null],
      warranty: [''],
      insurance: [''],
      health_score: [85, [Validators.min(0), Validators.max(100)]],
      status: ['Active'],
      type: ['', Validators.required],
      category_id: [null, Validators.required],
      tags: [[]]
    });
  }

  ngOnInit() {
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        const assetId = params['id'];
        if (assetId) {
          this.loadAsset(assetId);
        }
      });
    
    this.loadCategories();
    this.loadLocations();
    this.loadDepartments();
    this.loadAvailableTags();
    this.loadAssetStatuses();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initializeFlatpickr();
    }, 100);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    // Cleanup flatpickr instances
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
            const fieldName = inputElement.getAttribute('formControlName');
            
            let config: any = {
              dateFormat: 'd M, Y',
              allowInput: true,
              clickOpens: true,
              onChange: (selectedDates: Date[], dateStr: string) => {
                if (fieldName === 'purchase_date') {
                  this.assetForm.patchValue({ purchase_date: dateStr });
                } else if (fieldName === 'warranty') {
                  this.assetForm.patchValue({ warranty: dateStr });
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
  loadAsset(id: string) {
    this.loading = true;
    this.error = '';

    this.assetService.getAsset(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.asset = response.data.asset || response.data;
            this.populateForm();
          } else {
            this.error = response.message || 'Failed to load asset';
          }
          this.loading = false;
        },
        error: (error) => {
          this.error = error.error?.message || 'An error occurred while loading the asset';
          this.loading = false;
        }
      });
  }

  populateForm() {
    if (this.asset) {
      this.assetForm.patchValue({
        name: this.asset.name || '',
        description: this.asset.description || '',
        serial_number: this.asset.serial_number || '',
        model: this.asset.model || '',
        manufacturer: this.asset.manufacturer || '',
        purchase_date: this.asset.purchase_date || '',
        purchase_price: this.asset.purchase_price || null,
        depreciation: this.asset.depreciation || null,
        location_id: this.asset.location_id || null,
        department_id: this.asset.department_id || null,
        warranty: this.asset.warranty || '',
        insurance: this.asset.insurance || '',
        health_score: this.asset.health_score || 85,
        status: this.asset.status || 'Active',
        type: this.asset.type || '',
        category_id: this.asset.category_id || null,
        tags: this.asset.tags || []
      });

      // Set selected dropdowns
      // Wait for categories and locations to load before setting selections
      setTimeout(() => {
        this.selectedAssetType = this.assetTypes.find(type => type.value === this.asset.type) || null;
        this.selectedCategory = this.categories.find(cat => cat.id === this.asset.category_id) || null;
        this.selectedLocation = this.locations.find(loc => loc.id === this.asset.location_id) || null;
        this.selectedDepartment = this.departments.find(dept => dept.id === this.asset.department_id) || null;
        this.selectedStatus = this.statusOptions.find(status => status.value === this.asset.status) || null;
        
        // Set tags if available
        if (this.asset.tags && Array.isArray(this.asset.tags)) {
          this.selectedTags = this.asset.tags.map((tag: any) => {
            return this.availableTags.find(t => t.id === tag.id) || tag;
          });
        }
        
        // Mark form as touched to trigger validation
        this.assetForm.markAllAsTouched();
        this.assetForm.updateValueAndValidity();
      }, 100);
    }
  }

  loadCategories() {
    this.assetService.getAssetCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.data?.categories) {
            this.categories = response.data.categories;
            // Re-populate form if asset is already loaded
            if (this.asset) {
              this.populateForm();
            }
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
          if (response.success && response.data) {
            this.locations = response.data.locations || response.data;
            // Re-populate form if asset is already loaded
            if (this.asset) {
              this.populateForm();
            }
          }
        },
        error: (error) => {
          console.error('Error loading locations:', error);
        }
      });
  }

  loadDepartments() {
    this.assetService.getDepartments()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.departments = response.data;
            if (this.asset) {
              this.populateForm();
            }
          }
        },
        error: (error) => {
          console.error('Error loading departments:', error);
        }
      });
  }

  loadAvailableTags() {
    // For now, using mock data since we don't have the tags endpoint
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
  }

  loadAssetStatuses() {
    this.assetService.getAssetStatuses()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.statusOptionsFromAPI = response.data;
            this.statusOptions = this.statusOptionsFromAPI.map(status => ({
              id: status.id,
              value: status.name,
              label: status.name,
              color: this.hexToTailwindColor(status.color),
              description: status.description || `Asset is ${status.name.toLowerCase()}`,
              hexColor: status.color,
              sort_order: status.sort_order
            }));
            
            this.statusOptions.sort((a, b) => a.sort_order - b.sort_order);
            
            if (this.asset) {
              this.populateForm();
            }
          }
        },
        error: (error) => {
          console.error('Error loading asset statuses:', error);
        }
      });
  }

  private hexToTailwindColor(hexColor: string): string {
    const colorMap: { [key: string]: string } = {
      '#10B981': 'green',
      '#F59E0B': 'orange',
      '#9CA3AF': 'gray',
      '#EF4444': 'red',
      '#6B7280': 'gray',
      '#22C55E': 'green',
      '#3B82F6': 'blue',
      '#8B5CF6': 'purple',
      '#F97316': 'orange',
    };
    
    return colorMap[hexColor.toUpperCase()] || 'gray';
  }
  // Dropdown methods
  toggleAssetTypeDropdown() {
    this.showAssetTypeDropdown = !this.showAssetTypeDropdown;
    this.showCategoryDropdown = false;
    this.showLocationDropdown = false;
    this.showStatusDropdown = false;
    this.showTagsDropdown = false;
    this.showDepartmentDropdown = false;
  }

  toggleCategoryDropdown() {
    this.showCategoryDropdown = !this.showCategoryDropdown;
    this.showAssetTypeDropdown = false;
    this.showLocationDropdown = false;
    this.showStatusDropdown = false;
    this.showTagsDropdown = false;
    this.showDepartmentDropdown = false;
  }

  toggleLocationDropdown() {
    this.showLocationDropdown = !this.showLocationDropdown;
    this.showAssetTypeDropdown = false;
    this.showCategoryDropdown = false;
    this.showStatusDropdown = false;
    this.showTagsDropdown = false;
    this.showDepartmentDropdown = false;
  }

  toggleStatusDropdown() {
    this.showStatusDropdown = !this.showStatusDropdown;
    this.showAssetTypeDropdown = false;
    this.showCategoryDropdown = false;
    this.showLocationDropdown = false;
    this.showTagsDropdown = false;
    this.showDepartmentDropdown = false;
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

  selectAssetType(type: any) {
    this.selectedAssetType = type;
    this.assetForm.patchValue({ type: type.value });
    this.showAssetTypeDropdown = false;
    this.clearErrors();
  }

  selectCategory(category: any) {
    this.selectedCategory = category;
    this.assetForm.patchValue({ category_id: category.id });
    this.showCategoryDropdown = false;
    this.clearErrors();
  }

  selectLocation(location: any) {
    this.selectedLocation = location;
    this.assetForm.patchValue({ location_id: location.id });
    this.showLocationDropdown = false;
  }

  selectStatus(status: any) {
    this.selectedStatus = status;
    this.assetForm.patchValue({ status: status.value });
    this.showStatusDropdown = false;
  }

  selectDepartment(department: any) {
    this.selectedDepartment = department;
    this.assetForm.patchValue({ department_id: department.id });
    this.showDepartmentDropdown = false;
  }

  // Tag methods
  toggleTag(tag: any) {
    const index = this.selectedTags.findIndex(t => t.id === tag.id);
    if (index > -1) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.assetForm.patchValue({ tags: this.selectedTags.map(t => t.id) });
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
      const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'indigo', 'gray'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      const newTag = {
        id: Date.now(),
        name: tagName,
        color: randomColor,
        isNew: true
      };

      this.selectedTags.push(newTag);
      this.assetForm.patchValue({ tags: this.selectedTags.map(t => t.id) });
      this.newTagInput = '';
    }
  }

  removeTag(tag: any) {
    const index = this.selectedTags.findIndex(t => t.id === tag.id);
    if (index > -1) {
      this.selectedTags.splice(index, 1);
      this.assetForm.patchValue({ tags: this.selectedTags.map(t => t.id) });
    }
  }
  // File handling
  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const newFiles = Array.from(event.target.files) as File[];
      this.processFiles(newFiles);
      event.target.value = '';
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

    for (const file of files) {
      if (!allowedTypes.includes(file.type)) {
        console.warn('Invalid file type:', file.name);
        continue;
      }

      if (file.size > 10 * 1024 * 1024) {
        console.warn('File too large:', file.name);
        continue;
      }

      const isDuplicate = this.images.some(existing =>
        existing.name === file.name && existing.size === file.size
      );
      if (isDuplicate) {
        console.warn('Duplicate file skipped:', file.name);
        continue;
      }

      if (this.images.length + newImages.length >= maxImages) {
        console.warn('Max image count exceeded:', file.name);
        break;
      }

      newImages.push(file);

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

    this.images = [...this.images, ...newImages];
  }

  removeImage(index: number) {
    this.images.splice(index, 1);
    this.imagePreviewUrls.splice(index, 1);
  }

  removeAllImages() {
    this.images = [];
    this.imagePreviewUrls = [];
  }

  moveImage(fromIndex: number, toIndex: number) {
    if (toIndex >= 0 && toIndex < this.images.length) {
      const file = this.images.splice(fromIndex, 1)[0];
      this.images.splice(toIndex, 0, file);

      const previewUrl = this.imagePreviewUrls.splice(fromIndex, 1)[0];
      this.imagePreviewUrls.splice(toIndex, 0, previewUrl);
    }
  }

  moveImageUp(index: number) {
    if (index > 0) {
      this.moveImage(index, index - 1);
    }
  }

  moveImageDown(index: number) {
    if (index < this.images.length - 1) {
      this.moveImage(index, index + 1);
    }
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  onImageError(event: any, index: number) {
    console.error('Image failed to load at index:', index);
    event.target.style.display = 'none';
  }

  onImageLoad(event: any, index: number) {
    console.log('Image loaded successfully at index:', index);
  }

  onCategoryIconError(event: any, category: any) {
    console.warn('Category icon failed to load:', category.name, category.icon);
    category.iconError = true;
    event.target.style.display = 'none';
  }

  onAssetTypeIconError(event: any, assetType: any) {
    console.warn('Asset type icon failed to load:', assetType.name, assetType.icon);
    assetType.iconError = true;
    event.target.style.display = 'none';
  }

  // Validation methods
  validateForm(): boolean {
    let isValid = true;
    this.clearErrors();

    if (!this.assetForm.get('name')?.value || this.assetForm.get('name')?.value.trim().length === 0) {
      this.nameError = 'Asset name is required';
      isValid = false;
    } else if (this.assetForm.get('name')?.value.trim().length > 100) {
      this.nameError = 'Asset name cannot exceed 100 characters';
      isValid = false;
    }

    if (!this.selectedAssetType) {
      this.assetTypeError = 'Asset type is required';
      isValid = false;
    }

    if (!this.selectedCategory) {
      this.categoryError = 'Category is required';
      isValid = false;
    }

    const serialNumber = this.assetForm.get('serial_number')?.value;
    if (serialNumber && serialNumber.trim().length === 0) {
      this.serialNumberError = 'Serial number cannot be empty if provided';
      isValid = false;
    } else if (serialNumber && serialNumber.length > 255) {
      this.serialNumberError = 'Serial number cannot exceed 255 characters';
      isValid = false;
    }

    return isValid;
  }

  clearErrors() {
    this.nameError = '';
    this.assetTypeError = '';
    this.categoryError = '';
    this.serialNumberError = '';
    this.submitError = '';
    this.submitSuccess = '';
  }

  // Form submission
  onSubmit() {
    if (!this.validateForm() || this.saving || !this.asset) {
      return;
    }

    if (this.assetForm.valid && !this.saving && this.asset) {
      this.saving = true;
      this.error = '';
      this.successMessage = '';
      this.submitError = '';
      this.submitSuccess = '';

      const formData = this.assetForm.value;
      
      // Convert date formats from display format to Y-m-d format for backend
      if (formData.purchase_date) {
        formData.purchase_date = this.convertDateToBackendFormat(formData.purchase_date);
      }
      if (formData.warranty) {
        formData.warranty = this.convertDateToBackendFormat(formData.warranty);
      }
      
      this.assetService.updateAsset(this.asset.id, formData)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            if (response.success) {
              this.submitSuccess = 'Asset updated successfully!';
              // Navigate back to asset view after 2 seconds
              setTimeout(() => {
                this.router.navigate(['/assets', this.asset.id]);
              }, 2000);
            } else {
              this.submitError = response.message || 'Failed to update asset';
            }
            this.saving = false;
          },
          error: (error) => {
            this.submitError = error.error?.message || 'An error occurred while updating the asset';
            this.saving = false;
          }
        });
    }
  }

  goBack() {
    this.angularLocation.back();
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

  isFormValid(): boolean {
    return this.assetForm.valid && 
           this.selectedAssetType !== null && 
           this.selectedCategory !== null &&
           !this.nameError &&
           !this.assetTypeError &&
           !this.categoryError &&
           !this.serialNumberError;
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
}