import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    { value: 'fixed', label: 'Fixed Asset', icon: 'building-office-2', color: '#2563eb' },
    { value: 'semi-fixed', label: 'Semi-Fixed Asset', icon: 'cube', color: '#22c55e' },
    { value: 'mobile', label: 'Mobile Asset', icon: 'cog', color: '#f59e42' },
    { value: 'fleet', label: 'Fleet Asset', icon: 'car', color: '#a855f7' }
  ];
  assetType: string | null = null;

  constructor(private assetService: AssetService, private router: Router) {}

  ngOnInit() {
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

  goBack() {
    this.router.navigate(['/assets']);
  }

  // Validation methods
  validateForm(): boolean {
    let isValid = true;

    if (!this.name || this.name.trim().length < 2) {
      this.nameError = 'Asset name is required and must be at least 2 characters';
      isValid = false;
    }

    if (!this.assetType) {
      this.assetTypeError = 'Please select an asset type';
      isValid = false;
    }

    if (!this.category) {
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
    if (errors.name) {
      this.nameError = errors.name[0];
    }
    if (errors.type) {
      this.assetTypeError = errors.type[0];
    }
    if (errors.category_id) {
      this.categoryError = errors.category_id[0];
    }
    if (errors.serial_number) {
      this.serialNumberError = errors.serial_number[0];
    }
  }

  isFormValid(): boolean {
    return !!(this.name && this.assetType && this.category && this.serial_number);
  }

  removeImage(): void {
    this.previewImage = null;
    this.images = [];
  }
}
