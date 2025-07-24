import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AssetService } from '../../services/asset.service';
import { Location as angularLocation } from '@angular/common';

@Component({
  selector: 'app-asset-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './asset-edit.component.html',
  styleUrl: './asset-edit.component.scss'
})
export class AssetEditComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

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
  
  // Dropdown state
  showAssetTypeDropdown = false;
  showCategoryDropdown = false;
  showLocationDropdown = false;
  selectedAssetType: any | null = null;
  selectedCategory: any | null = null;
  selectedLocation: any | null = null;
  
  // Asset types
  assetTypes = [
    { value: 'fixed', label: 'Fixed Asset', icon: 'building-office-2', color: '#2563eb', description: 'Permanent assets like buildings and machinery' },
    { value: 'semi-fixed', label: 'Semi-Fixed Asset', icon: 'cube', color: '#22c55e', description: 'Assets that can be moved but are typically stationary' },
    { value: 'mobile', label: 'Mobile Asset', icon: 'cog', color: '#f59e42', description: 'Portable equipment and tools' },
    { value: 'fleet', label: 'Fleet Asset', icon: 'car', color: '#a855f7', description: 'Vehicles and transportation equipment' }
  ];

  // Image handling
  previewImage: string | null = null;
  selectedFile: File | null = null;

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
      category_id: [null, Validators.required]
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
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
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
        category_id: this.asset.category_id || null
      });

      // Set selected dropdowns
      this.selectedAssetType = this.assetTypes.find(type => type.value === this.asset.type) || null;
      this.selectedCategory = this.categories.find(cat => cat.id === this.asset.category_id) || null;
      this.selectedLocation = this.locations.find(loc => loc.id === this.asset.location_id) || null;
    }
  }

  loadCategories() {
    this.assetService.getAssetCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.data?.categories) {
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
          if (response.success && response.data) {
            this.locations = response.data.locations || response.data;
          }
        },
        error: (error) => {
          console.error('Error loading locations:', error);
        }
      });
  }

  // Dropdown methods
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

  selectAssetType(type: any) {
    this.selectedAssetType = type;
    this.assetForm.patchValue({ type: type.value });
    this.showAssetTypeDropdown = false;
  }

  selectCategory(category: any) {
    this.selectedCategory = category;
    this.assetForm.patchValue({ category_id: category.id });
    this.showCategoryDropdown = false;
  }

  selectLocation(location: any) {
    this.selectedLocation = location;
    this.assetForm.patchValue({ location_id: location.id });
    this.showLocationDropdown = false;
  }

  // File handling
  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.selectedFile = event.target.files[0];
      
      if (this.selectedFile) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(this.selectedFile);
      }
    }
  }

  removeImage() {
    this.previewImage = null;
    this.selectedFile = null;
  }

  // Form submission
  onSubmit() {
    if (this.assetForm.valid && !this.saving && this.asset) {
      this.saving = true;
      this.error = '';
      this.successMessage = '';

      const formData = this.assetForm.value;
      
      this.assetService.updateAsset(this.asset.id, formData)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            if (response.success) {
              this.successMessage = 'Asset updated successfully!';
              // Navigate back to asset view after 2 seconds
              setTimeout(() => {
                this.router.navigate(['/assets', this.asset.id]);
              }, 2000);
            } else {
              this.error = response.message || 'Failed to update asset';
            }
            this.saving = false;
          },
          error: (error) => {
            this.error = error.error?.message || 'An error occurred while updating the asset';
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
  }

  isFormValid(): boolean {
    return this.assetForm.valid;
  }
}