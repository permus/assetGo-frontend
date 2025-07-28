import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AssetService } from '../../services/asset.service';
import { Location as angularLocation } from '@angular/common';
import { PdfExportService } from '../../../shared/services/pdf-export.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-asset-view',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './asset-view.component.html',
  styleUrl: './asset-view.component.scss'
})
export class AssetViewComponent implements OnInit, OnDestroy, AfterViewInit {
  private destroy$ = new Subject<void>();
  @ViewChildren('dateInput') dateInputs!: QueryList<ElementRef>;

  asset: any = null;
  loading = true;
  error = '';
  
  // Image gallery state
  currentImageIndex = 0;
  selectedImageUrl: string | null = null;
  
  // UI state
  descriptionExpanded = false;
  
  // Maintenance Schedule
  maintenanceSchedules: any[] = [];
  maintenanceLoading = false;
  showAddMaintenanceModal = false;
  showEditMaintenanceModal = false;
  selectedSchedule: any = null;
  maintenanceForm: FormGroup;

  // Flatpickr instances
  flatpickrInstances: any[] = [];

  // Mock data for demonstration
  mockHealthData = {
    healthScore: 85,
    performanceTrend: [
      { month: 'Jan', value: 82 },
      { month: 'Feb', value: 84 },
      { month: 'Mar', value: 88 },
      { month: 'Apr', value: 85 }
    ]
  };

  mockFinancialData = {
    purchaseCost: 0,
    currentValue: 0,
    depreciationMethod: 'Straight Line',
    usefulLife: 10,
    originalValue: 0
  };

  mockMaintenanceData = {
    status: 'Current',
    lastMaintenance: null,
    nextMaintenance: null,
    interval: 'Every 6 months'
  };

  mockActivities: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private assetService: AssetService,
    private angularLocation: angularLocation,
    private pdfExportService: PdfExportService,
    private fb: FormBuilder
  ) {
    this.maintenanceForm = this.fb.group({
      schedule_type: ['', Validators.required],
      next_due: [''],
      last_done: [''],
      frequency: [''],
      notes: [''],
      status: ['Scheduled']
    });

    // Initialize mock activities
    this.mockActivities = [
      {
        title: 'Asset Created',
        description: 'Asset was added to the system',
        time: '2 days ago',
        type: 'creation'
      },
      {
        title: 'Status Updated',
        description: 'Status changed from Inactive to Active',
        time: '1 day ago',
        type: 'status_change'
      },
      {
        title: 'Location Changed',
        description: 'Moved to new location',
        time: '6 hours ago',
        type: 'location_change'
      }
    ];
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
  }

  ngAfterViewInit() {
    this.initializeDatePickers();
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

  loadAsset(id: string) {
    this.loading = true;
    this.error = '';

    this.assetService.getAsset(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.asset = response.data.asset || response.data;
            this.updateMockData();
            this.loadMaintenanceSchedules();
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

  loadMaintenanceSchedules() {
    if (!this.asset) return;
    
    this.maintenanceLoading = true;
    this.assetService.listMaintenanceSchedules(this.asset.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.maintenanceSchedules = response.data || [];
          }
          this.maintenanceLoading = false;
        },
        error: (error) => {
          console.error('Error loading maintenance schedules:', error);
          this.maintenanceLoading = false;
        }
      });
  }

  updateMockData() {
    if (this.asset) {
      // Update financial data with real asset data
      this.mockFinancialData = {
        purchaseCost: this.asset.purchase_price || 0,
        currentValue: this.asset.current_value || this.asset.purchase_price || 0,
        depreciationMethod: 'Straight Line',
        usefulLife: this.asset.depreciation || 10,
        originalValue: this.asset.purchase_price || 0
      };

      // Update health data with real asset data
      this.mockHealthData.healthScore = this.asset.health_score || 85;
      
      // Update maintenance data with real asset data
      this.mockMaintenanceData = {
        status: this.asset.status || 'Active',
        lastMaintenance: this.asset.last_maintenance_date || null,
        nextMaintenance: this.asset.next_maintenance_date || null,
        interval: this.asset.maintenance_interval || 'Every 6 months'
      };
      
      // Initialize image gallery
      if (this.asset.images && this.asset.images.length > 0) {
        this.selectedImageUrl = this.asset.images[0].image_url;
        this.currentImageIndex = 0;
      }
    }
  }

  goBack() {
    this.angularLocation.back();
  }

  editAsset() {
    if (this.asset) {
      this.router.navigate(['/assets', this.asset.id, 'edit']);
    }
  }

  exportAsset() {
    if (this.asset) {
      this.pdfExportService.exportSingleAssetToPdf(this.asset);
    }
  }

  printAsset() {
    window.print();
  }

  getStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      'Active': 'green',
      'Maintenance': 'orange',
      'Inactive': 'gray',
      'Retired': 'red'
    };
    return colors[status] || 'gray';
  }

  getAssetTypeIcon(): string {
    if (!this.asset?.type) return 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4';
    
    const icons: { [key: string]: string } = {
      'fixed': 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      'semi-fixed': 'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4a2 2 0 001-1.73z',
      'mobile': 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      'fleet': 'M3 13l2-5a2 2 0 012-2h10a2 2 0 012 2l2 5M5 13v6a2 2 0 002 2h10a2 2 0 002-2v-6M5 13h14'
    };
    return icons[this.asset.type] || icons['fixed'];
  }

  generateSmartDescription() {
    console.log('Generate smart description');
  }

  analyzeAssetImage() {
    console.log('Analyze asset image');
  }

  // Maintenance Schedule Methods
  addMaintenanceSchedule() {
    this.showAddMaintenanceModal = true;
    this.maintenanceForm.reset({
      schedule_type: '',
      next_due: '',
      last_done: '',
      frequency: '',
      notes: '',
      status: 'Scheduled'
    });
    // Initialize date pickers after modal opens
    setTimeout(() => {
      this.initializeDatePickers();
    }, 100);
  }

  editMaintenanceSchedule(schedule: any) {
    this.selectedSchedule = schedule;
    this.showEditMaintenanceModal = true;
    this.maintenanceForm.patchValue({
      schedule_type: schedule.schedule_type,
      next_due: schedule.next_due,
      last_done: schedule.last_done,
      frequency: schedule.frequency,
      notes: schedule.notes,
      status: schedule.status
    });
    // Initialize date pickers after modal opens
    setTimeout(() => {
      this.initializeDatePickers();
    }, 100);
  }

  deleteMaintenanceSchedule(schedule: any) {
    if (confirm('Are you sure you want to delete this maintenance schedule?')) {
      this.assetService.deleteMaintenanceSchedule(this.asset.id, schedule.id)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            if (response.success) {
              this.loadMaintenanceSchedules();
            }
          },
          error: (error) => {
            console.error('Error deleting maintenance schedule:', error);
          }
        });
    }
  }

  saveMaintenanceSchedule() {
    if (this.maintenanceForm.valid && this.asset) {
      const formData = this.maintenanceForm.value;
      
      if (this.selectedSchedule) {
        // Update existing schedule
        this.assetService.updateMaintenanceSchedule(this.asset.id, this.selectedSchedule.id, formData)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (response) => {
              if (response.success) {
                this.loadMaintenanceSchedules();
                this.closeMaintenanceModals();
              }
            },
            error: (error) => {
              console.error('Error updating maintenance schedule:', error);
            }
          });
      } else {
        // Create new schedule
        this.assetService.addMaintenanceSchedule(this.asset.id, formData)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (response) => {
              if (response.success) {
                this.loadMaintenanceSchedules();
                this.closeMaintenanceModals();
              }
            },
            error: (error) => {
              console.error('Error adding maintenance schedule:', error);
            }
          });
      }
    }
  }

  closeMaintenanceModals() {
    this.showAddMaintenanceModal = false;
    this.showEditMaintenanceModal = false;
    this.selectedSchedule = null;
    this.maintenanceForm.reset();
    // Cleanup flatpickr instances
    this.flatpickrInstances.forEach(instance => {
      if (instance) {
        instance.destroy();
      }
    });
    this.flatpickrInstances = [];
  }

  private initializeDatePickers() {
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
            const instance = flatpickr(inputRef.nativeElement, {
              dateFormat: 'Y-m-d',
              allowInput: true,
              clickOpens: true,
              onChange: (selectedDates, dateStr) => {
                // Update form control value
                const controlName = inputRef.nativeElement.getAttribute('formControlName');
                if (controlName && this.maintenanceForm.get(controlName)) {
                  this.maintenanceForm.get(controlName)!.setValue(dateStr);
                }
              }
            });
            this.flatpickrInstances.push(instance);
          }
        });
      }
    }, 50);
  }

  getScheduleStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      'Scheduled': 'blue',
      'Overdue': 'red',
      'Completed': 'green',
      'In Progress': 'yellow'
    };
    return colors[status] || 'gray';
  }

  formatDate(date: string): string {
    if (!date) return 'Not set';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  // Helper methods for displaying asset data
  getAssetTypeName(typeId: number | string): string {
    // You can load asset types from API and map them here
    // For now, return the ID or a default value
    if (!typeId) return 'Standard Asset';
    
    const typeMap: { [key: string]: string } = {
      '1': 'Fixed Asset',
      '2': 'Semi-Fixed Asset', 
      '3': 'Mobile Asset',
      '4': 'Fleet Asset',
      '5': 'IT Equipment'
    };
    
    return typeMap[typeId.toString()] || `Type ${typeId}`;
  }

  // Navigation methods
  navigateToPrevious() {
    // TODO: Implement navigation to previous asset
    console.log('Navigate to previous asset');
  }

  navigateToNext() {
    // TODO: Implement navigation to next asset
    console.log('Navigate to next asset');
  }

  // Related assets methods
  loadRelatedAssets() {
    // TODO: Load assets with similar category, location, or manufacturer
    console.log('Load related assets');
  }

  // Activity timeline methods
  loadActivityHistory() {
    // TODO: Load full activity history from API
    console.log('Load activity history');
  }

  // Performance tracking methods
  loadPerformanceMetrics() {
    // TODO: Load real performance data from API
    console.log('Load performance metrics');
  }

  // Document management methods
  uploadDocument() {
    // TODO: Implement document upload
    console.log('Upload document');
  }

  downloadDocument(documentId: string) {
    // TODO: Implement document download
    console.log('Download document:', documentId);
  }

  // Comparison methods
  compareWithSimilar() {
    // TODO: Compare with similar assets
    console.log('Compare with similar assets');
  }

  // Deep linking methods
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Export methods
  exportFinancialData() {
    // TODO: Export financial data to Excel/CSV
    console.log('Export financial data');
  }

  exportMaintenanceHistory() {
    // TODO: Export maintenance history
    console.log('Export maintenance history');
  }

  // Predictive maintenance methods
  generateMaintenanceRecommendations() {
    // TODO: Generate AI-powered maintenance recommendations
    console.log('Generate maintenance recommendations');
  }

  // Cost tracking methods
  addMaintenanceCost() {
    // TODO: Add maintenance cost entry
    console.log('Add maintenance cost');
  }

  viewCostHistory() {
    // TODO: View detailed cost history
    console.log('View cost history');
  }
  getWarrantyStatus(warrantyDate: string): string {
    if (!warrantyDate) return 'No warranty';
    
    const today = new Date();
    const warranty = new Date(warrantyDate);
    
    if (warranty < today) {
      return 'Expired';
    } else {
      const daysLeft = Math.ceil((warranty.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      if (daysLeft <= 30) {
        return `Expires in ${daysLeft} days`;
      } else {
        return 'Active';
      }
    }
  }

  getWarrantyStatusClass(warrantyDate: string): string {
    const status = this.getWarrantyStatus(warrantyDate);
    if (status === 'Expired') return 'text-red-600 font-medium';
    if (status.includes('Expires in')) return 'text-orange-600 font-medium';
    if (status === 'Active') return 'text-green-600 font-medium';
    return 'text-gray-500';
  }

  // Image gallery methods
  selectImage(index: number) {
    if (this.asset.images && index >= 0 && index < this.asset.images.length) {
      this.currentImageIndex = index;
      this.selectedImageUrl = this.asset.images[index].image_url;
    }
  }

  previousImage() {
    if (this.asset.images && this.asset.images.length > 1) {
      const newIndex = this.currentImageIndex > 0 ? this.currentImageIndex - 1 : this.asset.images.length - 1;
      this.selectImage(newIndex);
    }
  }

  nextImage() {
    if (this.asset.images && this.asset.images.length > 1) {
      const newIndex = this.currentImageIndex < this.asset.images.length - 1 ? this.currentImageIndex + 1 : 0;
      this.selectImage(newIndex);
    }
  }

  // Copy to clipboard methods
  copyAssetId() {
    const assetId = this.asset?.asset_id || this.asset?.id;
    if (assetId) {
      navigator.clipboard.writeText(assetId.toString()).then(() => {
        console.log('Asset ID copied to clipboard');
        // You could show a toast notification here
      }).catch(err => {
        console.error('Failed to copy asset ID:', err);
      });
    }
  }

  copySerialNumber() {
    if (this.asset?.serial_number) {
      navigator.clipboard.writeText(this.asset.serial_number).then(() => {
        console.log('Serial number copied to clipboard');
        // You could show a toast notification here
      }).catch(err => {
        console.error('Failed to copy serial number:', err);
      });
    }
  }

  // Financial calculation methods
  calculateDepreciation(): number {
    if (!this.asset?.purchase_price) return 0;
    const currentValue = this.asset.current_value || this.asset.purchase_price;
    return this.asset.purchase_price - currentValue;
  }

  calculateDepreciationRate(): number {
    const usefulLife = this.asset?.depreciation || 10;
    return Math.round((1 / usefulLife) * 100);
  }

  calculateTotalCostOfOwnership(): number {
    const purchasePrice = this.asset?.purchase_price || 0;
    const maintenanceCost = this.asset?.total_maintenance_cost || 0;
    const operatingCost = this.asset?.operating_cost || 0;
    return purchasePrice + maintenanceCost + operatingCost;
  }

  calculateROI(): number {
    // Simple ROI calculation - would need more data for accurate calculation
    const totalCost = this.calculateTotalCostOfOwnership();
    const currentValue = this.asset?.current_value || this.asset?.purchase_price || 0;
    if (totalCost === 0) return 0;
    return Math.round(((currentValue - totalCost) / totalCost) * 100);
  }

  // Quick action methods
  createWorkOrder() {
    console.log('Create work order for asset:', this.asset?.id);
    // TODO: Implement work order creation
  }

  transferAsset() {
    console.log('Transfer asset:', this.asset?.id);
    // TODO: Implement asset transfer
  }

  duplicateAsset() {
    if (this.asset) {
      this.router.navigate(['/assets/create'], {
        queryParams: {
          duplicate: true,
          sourceId: this.asset.id
        }
      });
    }
  }

  onImageError(event: any) {
    console.warn('Asset image failed to load:', event.target.src);
    event.target.onerror = null;
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMiA5VjEzTTEyIDE3SDE2TTE2IDlIMTJNMTIgOUw4IDEzTDEyIDE3IiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=';
  }

  viewFullImage(imageUrl: string) {
    window.open(imageUrl, '_blank');
  }
}