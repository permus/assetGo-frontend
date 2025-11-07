import { Component, OnInit, OnDestroy, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AssetService } from '../../services/asset.service';
import { Location as angularLocation } from '@angular/common';
import flatpickr from 'flatpickr';
import { CurrencyService } from '../../../core/services/currency.service';
import { NumberFormatPipe } from '../../../core/pipes/number-format.pipe';

@Component({
  selector: 'app-asset-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, NumberFormatPipe],
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
  showParentDropdown = false;
  selectedAssetType: any | null = null;
  selectedCategory: any | null = null;
  selectedLocation: any | null = null;
  selectedStatus: any | null = null;
  selectedDepartment: any | null = null;
  selectedTags: any[] = [];
  newTagInput: string = '';

  // Asset types
  assetTypes: any[] = [];
  assetTypesFromAPI: any[] = [];

  // Status options
  statusOptions: Array<{
    id?: number;
    value: number; // Changed from string to number
    label: string;
    color: string;
    description: string;
    hexColor?: string;
    sort_order: number;
  }> = [
    { value: 1, label: 'Active', color: 'green', description: 'Asset is operational and in use', sort_order: 1 },
    { value: 2, label: 'Maintenance', color: 'orange', description: 'Asset is under maintenance or repair', sort_order: 2 },
    { value: 3, label: 'Inactive', color: 'gray', description: 'Asset is not currently in use', sort_order: 3 },
    { value: 4, label: 'Retired', color: 'red', description: 'Asset is retired and no longer in service', sort_order: 4 }
  ];

  // Capacity unit options
  capacityUnitOptions: string[] = ['Unit', 'GB', 'TB', 'Liters', 'kg', 'BTU', 'kW', 'HP', 'Tons', 'Seats', 'Units'];

  // Image handling
  previewImage: string | null = null;
  selectedFile: File | null = null;
  images: File[] = [];
  imagePreviewUrls: string[] = [];
  existingImages: any[] = [];
  removedImageIds: number[] = [];
  isDragOver = false;

  // Validation errors
  nameError: string = '';
  assetTypeError: string = '';
  categoryError: string = '';
  serialNumberError: string = '';
  submitError: string = '';
  submitSuccess: string = '';

  possibleParents: any[] = [];

  private currencyService = inject(CurrencyService);
  currentCurrency = signal('USD');
  currencySymbol = signal('$');

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
      serial_number: ['', [Validators.minLength(0)]],
      model: [''],
      manufacturer: [''],
      purchase_date: [''],
      purchase_price: [null],
      depreciation: [null],
      depreciation_life: [null],
      location_id: [null],
      department_id: [null],
      parent_id: [null],
      warranty: [''],
      insurance: [''],
      health_score: [85, [Validators.min(0), Validators.max(100)]],
      brand: [''],
      dimensions: [''],
      weight: [''],
      capacity: [''],
      capacity_unit: [''],
      status: [null],
      type: [null, Validators.required],
      category_id: [null, Validators.required],
      tags: [[]]
    });
  }

  ngOnInit() {
    // Subscribe to currency changes for instant updates
    this.currencyService.get$().pipe(
      takeUntil(this.destroy$)
    ).subscribe(currency => {
      this.currentCurrency.set(currency);
      this.currencySymbol.set(this.currencyService.getSymbol());
    });

    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        const assetId = params['id'];
        if (assetId) {
          this.loadAsset(assetId);
          this.assetService.getPossibleParents(assetId).subscribe(res => {
            if (res.success && res.data?.possible_parents) {
              this.possibleParents = res.data.possible_parents;
            }
          });
        }
      });

    this.loadAssetTypes();
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
            console.log('Processing date input:', fieldName);

            // Only initialize Flatpickr for purchase_date field
            if (fieldName === 'purchase_date') {
              console.log('Initializing Flatpickr for purchase_date');
              let config: any = {
                dateFormat: 'd M, Y',
                allowInput: true,
                clickOpens: true,
                maxDate: 'today',
                defaultDate: null,
                onChange: (selectedDates: Date[], dateStr: string) => {
                  console.log('Date selected:', dateStr);
                  this.assetForm.get('purchase_date')?.setValue(dateStr);
                }
              };

              // Set default date if form has value
              const purchaseDate = this.assetForm.get('purchase_date')?.value;
              if (purchaseDate) {
                config.defaultDate = this.convertDisplayDateToDate(purchaseDate);
              }

              const instance = flatpickr(inputElement, config);
              this.flatpickrInstances.push(instance);
              console.log('Flatpickr initialized successfully for purchase_date');
            }
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
     // Convert backend dates to display format for form
     const purchaseDate = this.asset.purchase_date ? this.convertBackendDateToDisplay(this.asset.purchase_date) : '';
     const warrantyDate = this.asset.warranty ? this.convertBackendDateToDisplay(this.asset.warranty) : '';
     
      this.assetForm.patchValue({
        name: this.asset.name || '',
        description: this.asset.description || '',
        serial_number: this.asset.serial_number || '',
        model: this.asset.model || '',
        manufacturer: this.asset.manufacturer || '',
        brand: this.asset.brand || '',
        dimensions: this.asset.dimensions || '',
        weight: this.asset.weight || '',
        capacity: this.asset.capacity || '',
        capacity_unit: this.asset.capacity_unit || '',
        purchase_date: purchaseDate,
        purchase_price: this.asset.purchase_price || null,
        depreciation: this.asset.depreciation || null,
        depreciation_life: this.asset.depreciation_life || null,
        location_id: this.asset.location_id || null,
        department_id: this.asset.department_id || null,
        warranty: warrantyDate,
        insurance: this.asset.insurance || '',
        health_score: this.asset.health_score || 85,
        status: this.asset.status || null, // Keep as is - could be ID or string, will be handled below
        type: this.asset.type || '',
        category_id: this.asset.category_id || null,
        tags: this.asset.tags || [],
        parent_id: this.asset.parent_id || null
      });

      // Load existing images
      if (this.asset.images && Array.isArray(this.asset.images)) {
        this.existingImages = this.asset.images;
      }

      // Set selected dropdowns
      // Wait for categories and locations to load before setting selections
      setTimeout(() => {
        this.selectedAssetType = this.assetTypes.find(type =>
          type.id == this.asset.type
        ) || null;
        this.selectedCategory = this.categories.find(cat => cat.id === this.asset.category_id) || null;
        this.selectedLocation = this.locations.find(loc => loc.id === this.asset.location_id) || null;
        this.selectedDepartment = this.departments.find(dept => dept.id === this.asset.department_id) || null;
        const rawStatusIdOrName = this.asset?.status ?? this.asset?.asset_status?.id ?? this.asset?.asset_status?.name ?? null;
        const numericStatus = (rawStatusIdOrName !== null && rawStatusIdOrName !== undefined && !isNaN(Number(rawStatusIdOrName)))
          ? Number(rawStatusIdOrName)
          : null;
        const statusName = typeof rawStatusIdOrName === 'string' ? rawStatusIdOrName : (this.asset?.asset_status?.name ?? null);

        this.selectedStatus = this.statusOptions.find(status => {
          const matchesId = numericStatus !== null && (status.value === numericStatus || status.id === numericStatus);
          const matchesLabel = !!statusName && status.label.toLowerCase() === String(statusName).toLowerCase();
          return matchesId || matchesLabel;
        }) || null;

        // If status is found, update the form with the numerical ID
        if (this.selectedStatus) {
          this.assetForm.patchValue({ status: this.selectedStatus.value });
        }

        // Set tags if available
        if (this.asset.tags && Array.isArray(this.asset.tags)) {
          this.selectedTags = this.asset.tags.map((tag: any) => {
            return this.availableTags.find(t => t.id === tag.id) || tag;
          });
        }

        // Mark form as touched to trigger validation
        this.assetForm.markAllAsTouched();
        this.assetForm.updateValueAndValidity();
       
       // Reinitialize flatpickr after form is populated
       setTimeout(() => {
         this.initializeFlatpickr();
       }, 100);
      }, 100);
    }
  }

  loadAssetTypes() {
    this.assetService.getAssetTypes()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.assetTypesFromAPI = response.data;
            this.assetTypes = this.assetTypesFromAPI.map(type => ({
              id: type.id,
              name: type.name,
              label: type.name,
              value: type.name,
              icon: type.icon,
              color: this.getColorForType(type.name),
              description: `${type.name} asset type`,
              iconError: false
            }));

            // Re-populate form if asset is already loaded
            if (this.asset) {
              this.populateForm();
            }
          }
        },
        error: (error) => {
          console.error('Error loading asset types:', error);
        }
      });
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
              value: status.id, // Use numerical ID instead of string name
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

  onAssetTypeIconError(event: any, assetType: any) {
    console.warn('Asset type icon failed to load:', assetType.name, assetType.icon);
    assetType.iconError = true;
    event.target.style.display = 'none';
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

  private buildLocationLabel(loc: any): string {
    if (!loc) return '';
    if (loc.full_path) return loc.full_path;
    if (Array.isArray(loc.complete_hierarchy) && loc.complete_hierarchy.length > 0) {
      return loc.complete_hierarchy.map((n: any) => n.name).join(' → ');
    }
    if (Array.isArray(loc.ancestors_with_details) && loc.ancestors_with_details.length > 0) {
      return loc.ancestors_with_details.map((n: any) => n.name).join(' → ') + ' → ' + (loc.name || '');
    }
    return loc.name || '';
  }

  getLocationLabel(loc: any): string {
    return this.buildLocationLabel(loc);
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
    this.assetForm.patchValue({ type: type.id });
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
    this.selectedLocation = { ...location, label: this.buildLocationLabel(location) };
    this.assetForm.patchValue({ location_id: location.id });
    this.showLocationDropdown = false;
  }

  selectStatus(status: any) {
    this.selectedStatus = status;
    this.assetForm.patchValue({ status: status.value }); // This will now be the numerical ID
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
      this.newTagInput = '';
    }
  }

  removeTag(tag: any) {
    const index = this.selectedTags.findIndex(t => t.id === tag.id);
    if (index > -1) {
      this.selectedTags.splice(index, 1);
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

  removeExistingImage(index: number) {
    const removedImage = this.existingImages[index];
    if (removedImage && removedImage.id) {
      this.removedImageIds.push(removedImage.id);
    }
    this.existingImages.splice(index, 1);
  }

  removeAllExistingImages() {
    // Add all existing image IDs to removal list
    this.existingImages.forEach(img => {
      if (img && img.id) {
        this.removedImageIds.push(img.id);
      }
    });
    this.existingImages = [];
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
    console.warn('Image failed to load at index:', index);
    event.target.onerror = null;
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMiA5VjEzTTEyIDE3SDE2TTE2IDlIMTJNMTIgOUw4IDEzTDEyIDE3IiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=';
  }

  onImageLoad(event: any, index: number) {
    console.log('Image loaded successfully at index:', index);
  }

  viewFullImage(imageUrl: string) {
    window.open(imageUrl, '_blank');
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
    category.iconError = true;
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

      // Convert images to base64 before sending
      this.convertImagesToBase64().then((base64Images: string[]) => {
        const formData = this.assetForm.value;

        // Convert tags to name format
        formData.tags = this.selectedTags.map(tag => tag.name);

        // Convert date formats from display format to Y-m-d format for backend
        if (formData.purchase_date) {
          formData.purchase_date = this.convertDateToBackendFormat(formData.purchase_date);
        }
        if (formData.warranty) {
          formData.warranty = this.convertDateToBackendFormat(formData.warranty);
        }

        // Add images to form data
        formData.images = base64Images;
        
        // Add existing images that should be kept (only send IDs)
        formData.existing_images = this.existingImages.map(img => img.id || img.image_url);
        
        // Add removed image IDs for backend deletion
        if (this.removedImageIds.length > 0) {
          formData.remove_image_ids = this.removedImageIds;
        }

        // parent_id is already included in formData
        this.assetService.updateAsset(this.asset.id, formData)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (response) => {
              if (response.success) {
                this.submitSuccess = 'Asset updated successfully!';
                // Navigate back to asset view after 2 seconds
                setTimeout(() => {
                  this.router.navigate(['/assets/preview', this.asset.id]);
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
      }).catch((error) => {
        this.saving = false;
        this.submitError = 'Failed to process images. Please try again.';
        console.error('Image conversion error:', error);
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

  getSelectedParent() {
    return this.possibleParents.find(p => p.id === this.assetForm.get('parent_id')?.value);
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
  private convertBackendDateToDisplay(dateStr: string): string {
    if (!dateStr) return '';

    try {
      // Parse Y-m-d format to Date object
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

  // Helper method to convert display date string to Date object for flatpickr
  private convertDisplayDateToDate(dateStr: string): Date | null {
    if (!dateStr) return null;

    try {
      const date = new Date(dateStr);
      return isNaN(date.getTime()) ? null : date;
    } catch (error) {
      console.error('Date conversion error:', error);
      return null;
    }
  }
}
