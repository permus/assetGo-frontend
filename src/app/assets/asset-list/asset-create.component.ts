import { Component, OnInit, OnDestroy, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AssetService } from '../services/asset.service';
import flatpickr from 'flatpickr';

interface AssetTypeOption {
  value: string;
  label: string;
  icon: string;
  color: string;
  description: string;
}

interface AssetFormData {
  name: string;
  description: string;
  serial_number: string;
  category: string;
  location: string;
  purchase_date: string;
  purchase_price: number | null;
  warranty_expiration: string;
  status: string;
  condition: string;
  tags: string[];
  notes: string;
  images: File[];
}

@Component({
  selector: 'app-asset-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './asset-create.component.html',
  styleUrls: ['./asset-create.component.scss']
})
export class AssetCreateComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren('dateInput') dateInputs!: QueryList<ElementRef>;

  // Form properties for template-driven forms
  name: string = '';
  description: string = '';
  manufacturer: string = '';
  model: string = '';
  serial_number: string = '';
  purchase_price: number | null = null;
  purchase_date: string = '';
  depreciation: number | null = null;
  warranty: string = '';
  warranty_expiration: string = '';
  healthScore: number | null = null;
  department_id: string = '';
  notes: string = '';
  newTagInput: string = '';
  selectedAssetType: AssetTypeOption | null = null;
  selectedCategory: string = '';
  selectedLocation: string = '';
  selectedStatus: string = 'active';
  selectedTags: string[] = [];
  images: File[] = [];
  assetTypeError: boolean = false;
  showAssetTypeDropdown: boolean = false;
  categoryError: boolean = false;

  assetTypes: AssetTypeOption[] = [
    { 
      value: 'hardware', 
      label: 'Hardware',
      icon: 'monitor',
      color: '#3B82F6',
      description: 'Computer hardware and IT equipment'
    },
    { 
      value: 'software', 
      label: 'Software',
      icon: 'code',
      color: '#10B981',
      description: 'Software licenses and applications'
    },
    { 
      value: 'equipment', 
      label: 'Equipment',
      icon: 'settings',
      color: '#F59E0B',
      description: 'Tools and machinery'
    },
    { 
      value: 'furniture', 
      label: 'Furniture',
      icon: 'home',
      color: '#8B5CF6',
      description: 'Office furniture and fixtures'
    },
    { 
      value: 'vehicle', 
      label: 'Vehicle',
      icon: 'truck',
      color: '#EF4444',
      description: 'Vehicles and transportation'
    }
  ];

  categories = [
    'Computer Hardware',
    'Office Equipment',
    'Furniture',
    'Vehicles',
    'Tools & Equipment',
    'Software',
    'Other'
  ];

  locations = [
    'Main Office',
    'Warehouse',
    'Branch Office',
    'Remote Location',
    'Storage Room'
  ];

  statuses = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'maintenance', label: 'Under Maintenance' },
    { value: 'retired', label: 'Retired' }
  ];

  conditions = [
    { value: 'excellent', label: 'Excellent' },
    { value: 'good', label: 'Good' },
    { value: 'fair', label: 'Fair' },
    { value: 'poor', label: 'Poor' }
  ];

  availableTags = [
    'IT Equipment',
    'Office Supplies',
    'Furniture',
    'Electronics',
    'Maintenance Required',
    'High Value',
    'Portable',
    'Fragile'
  ];

  selectedImages: Array<{file: File, preview: string, name: string, size: string}> = [];
  isSubmitting = false;
  flatpickrInstances: flatpickr.Instance[] = [];

  constructor(
    private assetService: AssetService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.generateSerialNumber();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeDatePickers();
    }, 100);
  }

  ngOnDestroy(): void {
    this.flatpickrInstances.forEach(instance => {
      if (instance) {
        instance.destroy();
      }
    });
  }

  private initializeDatePickers(): void {
    if (this.dateInputs) {
      this.dateInputs.forEach((input, index) => {
        const element = input.nativeElement;
        const fieldName = element.getAttribute('name');
        
        let config: any = {
          dateFormat: 'Y-m-d',
          allowInput: true,
          onChange: (selectedDates: Date[], dateStr: string) => {
            if (fieldName === 'purchase_date') {
              this.assetForm.purchase_date = dateStr;
            } else if (fieldName === 'warranty_expiration') {
              this.assetForm.warranty_expiration = dateStr;
            }
          }
        };

        if (fieldName === 'purchase_date') {
          config.maxDate = 'today';
        } else if (fieldName === 'warranty_expiration') {
          config.minDate = 'today';
        }

        try {
          const instance = flatpickr(element, config);
          this.flatpickrInstances.push(instance);
        } catch (error) {
          console.error('Error initializing Flatpickr:', error);
        }
      });
    }
  }

  generateSerialNumber(): void {
    const prefix = 'AST';
    const timestamp = Date.now().toString().slice(-6);
    this.serial_number = `${prefix}-${timestamp}`;
  }

  onFileSelected(event: any): void {
    const files = event.target.files;
    this.processFiles(files);
  }

  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files) {
      this.processFiles(files);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
  }

  private processFiles(files: FileList): void {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      
      if (file.type.startsWith('image/')) {
        if (file.size <= 10 * 1024 * 1024) { // 10MB limit
          const reader = new FileReader();
          reader.onload = (e: ProgressEvent<FileReader>) => {
            const preview = e.target?.result as string;
            this.selectedImages.push({
              file: file,
              preview: preview,
              name: file.name,
              size: this.formatFileSize(file.size)
            });
            this.assetForm.images.push(file);
          };
          reader.readAsDataURL(file);
        } else {
          alert(`File ${file.name} is too large. Maximum size is 10MB.`);
        }
      } else {
        alert(`File ${file.name} is not a valid image format.`);
      }
    }
  }

  private formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  removeImage(index: number): void {
    this.selectedImages.splice(index, 1);
    this.assetForm.images.splice(index, 1);
  }

  triggerFileInput(): void {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput?.click();
  }

  onTagSelect(tag: string): void {
    if (!this.assetForm.tags.includes(tag)) {
      this.assetForm.tags.push(tag);
    }
  }

  removeTag(tag: string): void {
    const index = this.assetForm.tags.indexOf(tag);
    if (index > -1) {
      this.assetForm.tags.splice(index, 1);
    }
  }

  onSubmit(): void {
    if (this.validateForm()) {
      this.isSubmitting = true;
      
      const formData = new FormData();
      
      // Append form fields
      Object.keys(this.assetForm).forEach(key => {
        if (key !== 'images' && key !== 'tags') {
          const value = (this.assetForm as any)[key];
          if (value !== null && value !== undefined) {
            formData.append(key, value.toString());
          }
        }
      });
      
      // Append tags as JSON
      formData.append('tags', JSON.stringify(this.assetForm.tags));
      
      // Append images
      this.assetForm.images.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });

      this.assetService.createAsset(formData).subscribe({
        next: (response) => {
          console.log('Asset created successfully:', response);
          this.router.navigate(['/assets']);
        },
        error: (error) => {
          console.error('Error creating asset:', error);
          this.isSubmitting = false;
          if (error.error && error.error.errors) {
            this.handleFieldErrors(error.error.errors);
          }
        }
      });
    }
  }

  private validateForm(): boolean {
    const requiredFields = [
      { field: 'name', value: this.name },
      { field: 'selectedCategory', value: this.selectedCategory },
      { field: 'selectedLocation', value: this.selectedLocation },
      { field: 'serial_number', value: this.serial_number }
    ];
    
    for (const { field, value } of requiredFields) {
      if (!value) {
        alert(`Please fill in the ${field.replace('_', ' ').replace('selected', '')} field.`);
        return false;
      }
    }
    
    return true;
  }

  handleFieldErrors(errors: { [key: string]: string[] }): void {
    Object.keys(errors).forEach(field => {
      const errorMessages = errors[field];
      console.error(`Field ${field}:`, errorMessages);
      // You can implement more sophisticated error display here
      alert(`${field}: ${errorMessages.join(', ')}`);
    });
  }

  onCancel(): void {
    this.router.navigate(['/assets']);
  }

  selectAssetType(type: AssetTypeOption): void {
    this.selectedAssetType = type;
  }
}