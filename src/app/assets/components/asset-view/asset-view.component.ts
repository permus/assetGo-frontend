import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  ChangeDetectorRef
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {Subject, takeUntil} from 'rxjs';
import {AssetService} from '../../services/asset.service';
import {Location as angularLocation} from '@angular/common';
import {PdfExportService} from '../../../shared/services/pdf-export.service';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import flatpickr from 'flatpickr';
import {TransferAssetModalComponent} from '../transfer-asset-modal/transfer-asset-modal.component';
import * as QRCode from 'qrcode';
import {Chart, ChartConfiguration, ChartData, ChartOptions} from 'chart.js';
import {registerables} from 'chart.js';
import {CurrencyService} from '../../../core/services/currency.service';
import {ToastService} from '../../../core/services/toast.service';

// Register Chart.js components
Chart.register(...registerables);

@Component({
  selector: 'app-asset-view',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, TransferAssetModalComponent],
  templateUrl: './asset-view.component.html',
  styleUrl: './asset-view.component.scss'
})
export class AssetViewComponent implements OnInit, OnDestroy, AfterViewInit {
  private destroy$ = new Subject<void>();
  @ViewChildren('dateInput') dateInputs!: QueryList<ElementRef>;

  asset: any = null;
  loading = true;
  saveMaintenanceLoading = false;
  error = '';

  // Image gallery state
  currentImageIndex = 0;
  selectedImageUrl: string | null = null;

  // UI state
  descriptionExpanded = false;
  showActionsDropdown = false;
  showTransferModal = false;
  showActivityHistoryModal = false;

  // Maintenance Schedule
  maintenanceSchedules: any[] = [];
  maintenanceLoading = false;
  showAddMaintenanceModal = false;
  showEditMaintenanceModal = false;
  selectedSchedule: any = null;
  maintenanceForm: FormGroup;

  // Flatpickr instances
  flatpickrInstances: any[] = [];

  // Health & Performance data (now calculated dynamically)
  healthMetrics = {
    lastUpdated: new Date(),
    performanceTrend: [
      {month: 'Jan', value: 82},
      {month: 'Feb', value: 84},
      {month: 'Mar', value: 88},
      {month: 'Apr', value: 85}
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

  // Activity history
  activities: any[] = [];
  fullActivityHistory: any[] = [];
  activityLoading = false;
  activityHistoryLoading = false;
  activityError = '';
  activityHistoryError = '';

  // Activity history pagination and filters
  activityHistoryParams: { [key: string]: any } = {
    page: 1,
    per_page: 15,
    sort_by: 'created_at',
    sort_dir: 'desc',
    search: '',
    action: '',
    user_id: '',
    date_from: '',
    date_to: ''
  };
  activityHistoryPagination: any = null;

  // QR Code state
  qrCodeDataUrl: string | null = null;
  qrCodeLoading = false;

  // Barcode state
  barcodeDataUrl: string | null = null;
  barcodeLoading = false;

  // Related assets state
  relatedAssets: any[] = [];
  relatedAssetsLoading = false;
  relatedAssetsError = '';
  selectedRelatedFilter = 'all';
  showRelatedFilterDropdown = false;
  relatedAssetsParams: { [key: string]: any } = {
    type: 'all',
    limit: 10
  };

  // Chart state
  depreciationChart: Chart | null = null;
  depreciationChartLoading = false;
  depreciationChartError = '';
  depreciationChartData: any = null;

  // Health & Performance Chart
  healthPerformanceChart: Chart | null = null;
  healthPerformanceChartLoading = false;
  healthPerformanceChartError = '';
  healthPerformanceChartData: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private assetService: AssetService,
    private angularLocation: angularLocation,
    private pdfExportService: PdfExportService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private currencyService: CurrencyService,
    private toastService: ToastService
  ) {
    this.maintenanceForm = this.fb.group({
      schedule_type: ['', Validators.required],
      next_due: [''],
      last_done: [''],
      frequency: [''],
      notes: [''],
      status: ['Scheduled']
    });

    // Initialize activity history
    this.activities = [];
    this.fullActivityHistory = [];
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
    // Initialize chart after view is ready
    setTimeout(() => {
      if (this.asset && !this.depreciationChart) {
        this.createDepreciationChart();
      }
    }, 500);
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
    // Cleanup charts
    if (this.depreciationChart) {
      this.depreciationChart.destroy();
    }
    if (this.healthPerformanceChart) {
      this.healthPerformanceChart.destroy();
    }
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
            this.loadActivityHistory();
            // Generate QR code after asset is loaded
            this.generateQRCode();
            // Generate barcode after asset is loaded (if no server barcode URL)
            if (!this.asset.barcode_url && this.asset.asset_id) {
              this.generateBarcode();
            }
            // Load related assets after asset is loaded
            this.loadRelatedAssets();
            this.loadDepreciationChart();
            this.loadHealthPerformanceChart();
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

      // Update health metrics with real asset data
      this.healthMetrics.lastUpdated = new Date();

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
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to print this asset');
      return;
    }

    // Generate the print content
    const printContent = this.generatePrintContent();

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Asset Details - ${this.asset?.name || 'Asset'}</title>
          <style>
            @media print {
              body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
              .no-print { display: none !important; }
              .print-only { display: block !important; }
              .page-break { page-break-before: always; }
              .avoid-break { page-break-inside: avoid; }
              table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
              th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
              th { background-color: #f8f9fa; font-weight: bold; }
              .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 20px; }
              .section { margin-bottom: 25px; }
              .section-title { font-size: 18px; font-weight: bold; margin-bottom: 15px; color: #333; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
              .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
              .info-item { margin-bottom: 15px; }
              .info-label { font-weight: bold; color: #666; font-size: 14px; }
              .info-value { font-size: 16px; margin-top: 5px; }
              .status-badge { display: inline-block; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; }
              .qr-section { text-align: center; margin: 20px 0; }
              .qr-code { max-width: 200px; margin: 0 auto; }
              .footer { margin-top: 40px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #ddd; padding-top: 20px; }
              @page { margin: 1in; }
            }
            @media screen {
              body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
              .no-print { display: none; }
              .print-only { display: block; }
              .page-break { border-top: 2px solid #333; margin-top: 30px; padding-top: 30px; }
              .avoid-break { }
              table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
              th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
              th { background-color: #f8f9fa; font-weight: bold; }
              .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 20px; }
              .section { margin-bottom: 25px; }
              .section-title { font-size: 18px; font-weight: bold; margin-bottom: 15px; color: #333; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
              .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
              .info-item { margin-bottom: 15px; }
              .info-label { font-weight: bold; color: #666; font-size: 14px; }
              .info-value { font-size: 16px; margin-top: 5px; }
              .status-badge { display: inline-block; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; }
              .qr-section { text-align: center; margin: 20px 0; }
              .qr-code { max-width: 200px; margin: 0 auto; }
              .footer { margin-top: 40px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #ddd; padding-top: 20px; }
            }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);

    printWindow.document.close();

    // Wait for content to load then print
    printWindow.onload = () => {
      printWindow.print();
      printWindow.close();
    };
  }

  private generatePrintContent(): string {
    if (!this.asset) return '<p>Asset not found</p>';

    const asset = this.asset;
    const currentDate = new Date().toLocaleDateString();

    return `
      <div class="header">
        <h1>Asset Details Report</h1>
        <p>Generated on: ${currentDate}</p>
      </div>

      <div class="section">
        <div class="section-title">Asset Overview</div>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Asset Name</div>
            <div class="info-value">${asset.name || 'N/A'}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Asset ID</div>
            <div class="info-value">${asset.asset_id || asset.id || 'N/A'}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Category</div>
            <div class="info-value">${asset.category?.name || 'General'}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Status</div>
            <div class="info-value">
              <span class="status-badge" style="background-color: ${asset.asset_status?.color || '#6B7280'}20; color: ${asset.asset_status?.color || '#6B7280'}">
                ${asset.asset_status?.name || 'Not specified'}
              </span>
            </div>
          </div>
          <div class="info-item">
            <div class="info-label">Type</div>
            <div class="info-value">${this.getAssetTypeName(asset.type)}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Location</div>
            <div class="info-value">${asset.location?.name || 'No location assigned'}</div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Description</div>
        <p>${asset.description || 'No description available'}</p>
      </div>

      <div class="section">
        <div class="section-title">Technical Specifications</div>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Manufacturer</div>
            <div class="info-value">${asset.manufacturer || 'Not specified'}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Model</div>
            <div class="info-value">${asset.model || 'Not specified'}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Serial Number</div>
            <div class="info-value">${asset.serial_number || 'Not specified'}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Brand</div>
            <div class="info-value">${asset.brand || 'Not specified'}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Dimensions</div>
            <div class="info-value">${asset.dimensions || 'Not specified'}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Weight</div>
            <div class="info-value">${asset.weight || 'Not specified'}</div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Financial Information</div>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Purchase Price</div>
            <div class="info-value">${this.getCurrencySymbol()}${this.formatCurrency(asset.purchase_price || 0)}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Current Value</div>
            <div class="info-value">${this.getCurrencySymbol()}${this.formatCurrency(this.calculateCurrentValue())}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Purchase Date</div>
            <div class="info-value">${asset.purchase_date ? new Date(asset.purchase_date).toLocaleDateString() : 'Not specified'}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Warranty Status</div>
            <div class="info-value">${this.getWarrantyStatus(asset.warranty)}</div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Performance Metrics</div>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Health Score</div>
            <div class="info-value">${asset.health_score || 0}%</div>
          </div>
          <div class="info-item">
            <div class="info-label">Utilization Rate</div>
            <div class="info-value">${this.getUtilizationRate()}%</div>
          </div>
          <div class="info-item">
            <div class="info-label">Asset Age</div>
            <div class="info-value">${this.getAssetAge()}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Total Cost of Ownership</div>
            <div class="info-value">${this.getCurrencySymbol()}${this.formatCurrency(this.calculateTotalCostOfOwnership())}</div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Timeline Information</div>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Created Date</div>
            <div class="info-value">${asset.created_at ? new Date(asset.created_at).toLocaleDateString() : 'Not specified'}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Last Modified</div>
            <div class="info-value">${asset.updated_at ? new Date(asset.updated_at).toLocaleDateString() : 'Not specified'}</div>
          </div>
        </div>
      </div>

      <div class="qr-section">
        <div class="section-title">Asset Identification</div>
        <div class="qr-code">
          ${this.qrCodeDataUrl ? `<img src="${this.qrCodeDataUrl}" alt="QR Code" style="max-width: 100%; height: auto;">` : '<p>QR Code not available</p>'}
        </div>
        <p><strong>Asset ID:</strong> ${asset.asset_id || asset.id || 'N/A'}</p>
      </div>

      <div class="footer">
        <p>AssetGo - Asset Management System</p>
        <p>This report was generated automatically on ${currentDate}</p>
      </div>
    `;
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

  getAssetStatusColor(assetStatus: any): string {
    if (!assetStatus || !assetStatus.color) {
      return '#6B7280'; // Default gray color
    }
    return assetStatus.color;
  }

  getAssetStatusBackgroundColor(assetStatus: any): string {
    if (!assetStatus || !assetStatus.color) {
      return '#F3F4F6'; // Default gray background
    }
    // Add 20% opacity to the color for background
    return assetStatus.color + '20';
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
      this.saveMaintenanceLoading = true;
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
              this.saveMaintenanceLoading = false;
              console.error('Error updating maintenance schedule:', error);
            }
          }).add(() =>{
            this.saveMaintenanceLoading = false;
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
              this.saveMaintenanceLoading = false;
              console.error('Error adding maintenance schedule:', error);
            }
          }).add(() =>{
            this.saveMaintenanceLoading = false;
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
    if (!this.asset?.id) return;

    this.relatedAssetsLoading = true;
    this.relatedAssetsError = '';

    this.assetService.getRelatedAssets(this.asset.id, this.relatedAssetsParams)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.relatedAssets = response.data.related_assets || [];
          } else {
            this.relatedAssetsError = response.message || 'Failed to load related assets';
          }
          this.relatedAssetsLoading = false;
        },
        error: (error) => {
          this.relatedAssetsError = error.error?.message || 'An error occurred while loading related assets';
          this.relatedAssetsLoading = false;
        }
      });
  }

  loadDepreciationChart() {
    if (!this.asset?.id) return;

    this.depreciationChartLoading = true;
    this.depreciationChartError = '';

    console.log('Loading depreciation chart for asset:', this.asset.id);

    this.assetService.getAssetDepreciationChart(this.asset.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          console.log('Chart API Response:', response);
          if (response.success) {
            this.depreciationChartData = response.data;
            console.log('Chart data set:', this.depreciationChartData);
            this.createDepreciationChart();
          } else {
            this.depreciationChartError = response.message || 'Failed to load depreciation chart data';
            console.log('API returned error, using mock data');
            // Fallback to mock data if API returns error
            this.createDepreciationChartWithMockData();
          }
          this.depreciationChartLoading = false;
        },
        error: (error) => {
          console.error('Chart API Error:', error);
          this.depreciationChartError = error.error?.message || 'An error occurred while loading depreciation chart data';
          this.depreciationChartLoading = false;
          // Fallback to mock data if API fails
          this.createDepreciationChartWithMockData();
        }
      });
  }

  createDepreciationChart() {
    console.log('Creating depreciation chart...');

    // Destroy existing chart if it exists
    if (this.depreciationChart) {
      console.log('Destroying existing chart');
      this.depreciationChart.destroy();
    }

    // Wait a bit for the DOM to be ready
    setTimeout(() => {
      const ctx = document.getElementById('depreciationChart') as HTMLCanvasElement;
      console.log('Canvas element:', ctx);

      if (!ctx) {
        console.error('Depreciation chart canvas not found');
        return;
      }

      // Use API data if available, otherwise fallback to mock data
      const chartData = this.processChartData(this.depreciationChartData) || this.generateMockDepreciationData();
      console.log('Chart data to use:', chartData);

      try {
        this.depreciationChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: chartData.labels,
            datasets: [
              {
                label: 'Asset Value',
                data: chartData.values,
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
              },
              {
                label: 'Accumulated Depreciation',
                data: chartData.depreciation,
                borderColor: '#EF4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderWidth: 2,
                fill: false,
                tension: 0.4
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: 'Asset Depreciation Over Time',
                font: {
                  size: 16,
                  weight: 'bold'
                }
              },
              legend: {
                display: true,
                position: 'top'
              },
              tooltip: {
                mode: 'index',
                intersect: false,
                callbacks: {
                  label: (context) => {
                    const label = context.dataset.label || '';
                    const value = context.parsed.y;
                    return `${label}: ${this.getCurrencySymbol()}${value !== null ? value.toLocaleString() : '0'}`;
                  }
                }
              }
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Month'
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'Value ($)'
                },
                beginAtZero: true,
                ticks: {
                  callback: (value) => `${this.getCurrencySymbol()}${Number(value).toLocaleString()}`
                }
              }
            },
            interaction: {
              mode: 'nearest',
              axis: 'x',
              intersect: false
            }
          }
        });
        console.log('Chart created successfully');
        // Trigger change detection after chart creation
        this.cdr.detectChanges();
      } catch (error) {
        console.error('Error creating chart:', error);
      }
    }, 100);
  }

  processChartData(apiData: any) {
    if (!apiData || !apiData.chart_data || !apiData.chart_data.has_data) {
      return null;
    }

    const chartData = apiData.chart_data;
    const labels = chartData.depreciation_months.map((month: number) => `Month ${month}`);
    const values = chartData.depreciation_values.map((value: string) => parseFloat(value));

    // Calculate accumulated depreciation
    const purchasePrice = parseFloat(apiData.asset.purchase_price);
    const depreciation = values.map((value: number) => purchasePrice - value);

    return {
      labels,
      values,
      depreciation
    };
  }

  createDepreciationChartWithMockData() {
    const mockData = this.generateMockDepreciationData();
    this.depreciationChartData = mockData;
    this.createDepreciationChart();
  }

  generateMockDepreciationData() {
    const purchasePrice = parseFloat(this.asset?.purchase_price) || 10000;
    const usefulLife = parseFloat(this.asset?.depreciation) || 10;
    const depreciationLife = this.asset?.depreciation_life || 10;

    const labels: string[] = [];
    const values: number[] = [];
    const depreciation: number[] = [];

    // Use depreciation_life if available, otherwise use usefulLife
    const totalPeriods = depreciationLife || usefulLife;

    for (let month = 1; month <= totalPeriods; month++) {
      labels.push(`Month ${month}`);

      const monthlyDepreciation = purchasePrice / totalPeriods;
      const totalDepreciation = monthlyDepreciation * (month - 1);
      const currentValue = Math.max(0, purchasePrice - totalDepreciation);

      values.push(currentValue);
      depreciation.push(totalDepreciation);
    }

    return {
      labels,
      values,
      depreciation
    };
  }

  onRelatedFilterChange(filterType: string) {
    this.selectedRelatedFilter = filterType;
    this.relatedAssetsParams['type'] = filterType;
    this.loadRelatedAssets();
  }

  getRelatedFilterDisplayName(filterType: string): string {
    const filterMap: { [key: string]: string } = {
      'all': 'All Related',
      'category': 'Same Category',
      'location': 'Same Location',
      'department': 'Same Department',
      'manufacturer': 'Same Manufacturer',
      'parent': 'Same Parent',
      'children': 'Child Assets',
      'siblings': 'Sibling Assets',
      'similar': 'Similar Assets'
    };
    return filterMap[filterType] || filterType;
  }

  getRelatedAssetStatusColor(status: any): string {
    if (status?.color) {
      return `bg-${this.getColorFromHex(status.color)}-100 text-${this.getColorFromHex(status.color)}-700`;
    }

    const statusName = status?.name || status;
    const colors: { [key: string]: string } = {
      'Active': 'bg-green-100 text-green-700',
      'Inactive': 'bg-gray-100 text-gray-700',
      'Maintenance': 'bg-orange-100 text-orange-700',
      'Retired': 'bg-red-100 text-red-700'
    };
    return colors[statusName] || 'bg-gray-100 text-gray-700';
  }

  private getColorFromHex(hex: string): string {
    // Simple mapping of hex colors to Tailwind color names
    const colorMap: { [key: string]: string } = {
      '#10B981': 'green',
      '#EF4444': 'red',
      '#F59E0B': 'yellow',
      '#3B82F6': 'blue',
      '#8B5CF6': 'purple',
      '#F97316': 'orange',
      '#6B7280': 'gray'
    };
    return colorMap[hex] || 'gray';
  }

  navigateToRelatedAsset(assetId: number | string) {
    this.router.navigate(['/assets/preview', assetId]);
  }

  // Activity timeline methods
  loadActivityHistory() {
    if (!this.asset?.id) return;

    this.activityLoading = true;
    this.activityError = '';

    // Load recent activities (first 5)
    const params = {
      page: 1,
      per_page: 5,
      sort_by: 'created_at',
      sort_dir: 'desc'
    };

    this.assetService.getActivityHistory(this.asset.id, params)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.activities = response.data.data || [];
          } else {
            this.activityError = response.message || 'Failed to load activity history';
          }
          this.activityLoading = false;
        },
        error: (error) => {
          this.activityError = error.error?.message || 'An error occurred while loading activity history';
          this.activityLoading = false;
        }
      });
  }

  // Performance tracking methods
  loadPerformanceMetrics() {
    // TODO: Load real performance data from API
    console.log('Load performance metrics');
  }

  // Health & Performance Dashboard Methods
  refreshHealthMetrics() {
    this.loadPerformanceMetrics();
    // Refresh health data
    console.log('Refreshing health metrics');
  }

  refreshDepreciationChart() {
    console.log('Refreshing depreciation chart...');
    this.loadDepreciationChart();
  }

  // Method to manually create chart (for debugging)
  forceCreateChart() {
    console.log('Force creating chart...');
    this.createDepreciationChart();
  }

  // Health & Performance Chart Methods
  loadHealthPerformanceChart() {
    if (!this.asset?.id) {
      console.log('No asset ID available for health performance chart');
      return;
    }

    this.healthPerformanceChartLoading = true;
    this.healthPerformanceChartError = '';

    console.log('Loading health performance chart for asset:', this.asset.id);

    this.assetService.getAssetHealthPerformanceChart(this.asset.id, {months: 12})
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          console.log('Health performance chart API response:', response);
          this.healthPerformanceChartLoading = false;

          if (response.success && response.data) {
            this.healthPerformanceChartData = response.data;
            // Create chart after a delay to ensure DOM is ready
            setTimeout(() => {
              this.createHealthPerformanceChart();
            }, 100);
          } else {
            this.healthPerformanceChartError = 'Failed to load health performance data';
            console.error('Health performance chart API error:', response);
          }
        },
        error: (error) => {
          console.error('Health performance chart API error:', error);
          this.healthPerformanceChartLoading = false;
          this.healthPerformanceChartError = 'Failed to load health performance data';
        }
      });
  }

  createHealthPerformanceChart() {
    console.log('Creating health performance chart...');
    console.log('Health performance chart data:', this.healthPerformanceChartData);

    // Destroy existing chart
    if (this.healthPerformanceChart) {
      this.healthPerformanceChart.destroy();
      this.healthPerformanceChart = null;
    }

    const canvas = document.getElementById('healthPerformanceChart') as HTMLCanvasElement;
    console.log('Canvas element:', canvas);
    if (!canvas) {
      console.error('Health performance chart canvas not found');
      return;
    }

    setTimeout(() => {
      try {
        console.log('Processing health performance data...');
        const chartData = this.processHealthPerformanceData(this.healthPerformanceChartData);
        console.log('Processed chart data:', chartData);

        const config: ChartConfiguration = {
          type: 'line',
          data: {
            labels: chartData.labels,
            datasets: [
              {
                label: 'Health Score',
                data: chartData.healthScores,
                borderColor: '#10B981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderWidth: 2,
                fill: false,
                tension: 0.4,
                pointBackgroundColor: '#10B981',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6
              },
              {
                label: 'Performance Score',
                data: chartData.performanceScores,
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 2,
                fill: false,
                tension: 0.4,
                pointBackgroundColor: '#3B82F6',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6
              },
              {
                label: 'Maintenance Count',
                data: chartData.maintenanceCounts,
                borderColor: '#F59E0B',
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                borderWidth: 2,
                fill: false,
                tension: 0.4,
                pointBackgroundColor: '#F59E0B',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                yAxisID: 'y1'
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
              mode: 'index',
              intersect: false,
            },
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  usePointStyle: true,
                  padding: 20,
                  font: {
                    size: 12
                  }
                }
              },
              tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                borderColor: '#374151',
                borderWidth: 1,
                cornerRadius: 8,
                displayColors: true,
                callbacks: {
                  label: function (context) {
                    const label = context.dataset.label || '';
                    const value = context.parsed.y;
                    if (label === 'Maintenance Count') {
                      return `${label}: ${value} activities`;
                    }
                    return `${label}: ${value}%`;
                  }
                }
              }
            },
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: 'Month',
                  font: {
                    size: 12,
                    weight: 'bold'
                  }
                },
                grid: {
                  display: true,
                  color: 'rgba(0, 0, 0, 0.1)'
                }
              },
              y: {
                type: 'linear',
                display: true,
                position: 'left',
                title: {
                  display: true,
                  text: 'Score (%)',
                  font: {
                    size: 12,
                    weight: 'bold'
                  }
                },
                min: 0,
                max: 100,
                grid: {
                  display: true,
                  color: 'rgba(0, 0, 0, 0.1)'
                }
              },
              y1: {
                type: 'linear',
                display: true,
                position: 'right',
                title: {
                  display: true,
                  text: 'Maintenance Count',
                  font: {
                    size: 12,
                    weight: 'bold'
                  }
                },
                min: 0,
                grid: {
                  drawOnChartArea: false,
                  color: 'rgba(0, 0, 0, 0.1)'
                }
              }
            }
          }
        };

        this.healthPerformanceChart = new Chart(canvas, config);
        console.log('Health performance chart created successfully');
        this.cdr.detectChanges();
      } catch (error) {
        console.error('Error creating health performance chart:', error);
        // Retry after a longer delay if the first attempt fails
        setTimeout(() => {
          console.log('Retrying health performance chart creation...');
          this.createHealthPerformanceChart();
        }, 500);
      }
    }, 100);
  }

  processHealthPerformanceData(apiData: any) {
    if (!apiData?.chart_data) {
      console.log('No chart data available, using mock data');
      return this.generateMockHealthPerformanceData();
    }

    const chartData = apiData.chart_data;
    console.log('Processing health performance data:', chartData);

    // Format dates for better display
    const formattedLabels = (chartData.dates || []).map((dateStr: string) => {
      if (dateStr && dateStr.includes('-')) {
        const [year, month] = dateStr.split('-');
        const date = new Date(parseInt(year), parseInt(month) - 1);
        return date.toLocaleDateString('en-US', {month: 'short', year: '2-digit'});
      }
      return dateStr;
    });

    return {
      labels: formattedLabels,
      healthScores: chartData.health_scores || [],
      performanceScores: chartData.performance_scores || [],
      maintenanceCounts: chartData.maintenance_counts || [],
      metrics: chartData.metrics || {}
    };
  }

  generateMockHealthPerformanceData() {
    const months = 12;
    const labels = [];
    const healthScores = [];
    const performanceScores = [];
    const maintenanceCounts = [];

    for (let i = 0; i < months; i++) {
      const date = new Date();
      date.setMonth(date.getMonth() - (months - 1 - i));
      labels.push(date.toLocaleDateString('en-US', {month: 'short', year: '2-digit'}));

      // Generate realistic health scores (declining trend)
      const baseHealth = 85;
      const decline = (i * 2) + Math.random() * 5;
      healthScores.push(Math.max(60, Math.round(baseHealth - decline)));

      // Generate performance scores (more stable)
      const basePerformance = 90;
      const variation = (Math.random() - 0.5) * 10;
      performanceScores.push(Math.max(75, Math.round(basePerformance + variation)));

      // Generate maintenance counts (random)
      maintenanceCounts.push(Math.floor(Math.random() * 5) + 1);
    }

    return {
      labels,
      healthScores,
      performanceScores,
      maintenanceCounts,
      metrics: {
        average_health_score: Math.round(healthScores.reduce((a, b) => a + b, 0) / healthScores.length),
        average_performance_score: Math.round(performanceScores.reduce((a, b) => a + b, 0) / performanceScores.length),
        total_maintenance_count: maintenanceCounts.reduce((a, b) => a + b, 0),
        health_trend: healthScores[healthScores.length - 1] - healthScores[0],
        performance_trend: performanceScores[performanceScores.length - 1] - performanceScores[0]
      }
    };
  }

  refreshHealthPerformanceChart() {
    this.loadHealthPerformanceChart();
  }

  forceCreateHealthPerformanceChart() {
    console.log('Force creating health performance chart...');
    console.log('Current health performance chart data:', this.healthPerformanceChartData);

    // If no data, try to load it first
    if (!this.healthPerformanceChartData) {
      console.log('No data available, loading health performance chart...');
      this.loadHealthPerformanceChart();
      return;
    }

    this.createHealthPerformanceChart();
  }

  getHealthScoreColor(healthScore: number): string {
    if (!healthScore) return 'text-gray-400';
    if (healthScore >= 80) return 'text-green-600';
    if (healthScore >= 60) return 'text-yellow-600';
    if (healthScore >= 40) return 'text-orange-600';
    return 'text-red-600';
  }

  getHealthStatusColor(healthScore: number): string {
    if (!healthScore) return 'text-gray-600';
    if (healthScore >= 80) return 'text-green-600';
    if (healthScore >= 60) return 'text-yellow-600';
    if (healthScore >= 40) return 'text-orange-600';
    return 'text-red-600';
  }

  getHealthStatusText(healthScore: number): string {
    if (!healthScore) return 'Unknown';
    if (healthScore >= 80) return 'Excellent';
    if (healthScore >= 60) return 'Good';
    if (healthScore >= 40) return 'Fair';
    return 'Poor';
  }

  getAssetAge(): string {
    if (!this.asset?.purchase_date) return 'Unknown';

    const purchaseDate = new Date(this.asset.purchase_date);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - purchaseDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 365) {
      return `${Math.floor(diffDays / 30)} months`;
    } else {
      const years = Math.floor(diffDays / 365);
      return `${years} year${years > 1 ? 's' : ''}`;
    }
  }

  getUtilizationRate(): number {
    // Calculate based on health score and asset age
    const healthScore = this.asset?.health_score || 0;

    // Simple calculation based on health score
    if (healthScore >= 80) return 95;
    if (healthScore >= 60) return 85;
    if (healthScore >= 40) return 70;
    return 50;
  }

  getUptimePercentage(): number {
    // Calculate based on health score and maintenance history
    const healthScore = this.asset?.health_score || 0;

    if (healthScore >= 80) return 99.5;
    if (healthScore >= 60) return 98.0;
    if (healthScore >= 40) return 95.0;
    return 90.0;
  }

  getMaintenanceFrequency(): string {
    const healthScore = this.asset?.health_score || 0;

    if (healthScore >= 80) return 'Low';
    if (healthScore >= 60) return 'Medium';
    if (healthScore >= 40) return 'High';
    return 'Very High';
  }

  getMaintenanceFrequencyPercentage(): number {
    const healthScore = this.asset?.health_score || 0;

    if (healthScore >= 80) return 20;
    if (healthScore >= 60) return 40;
    if (healthScore >= 40) return 60;
    return 80;
  }

  getCostEfficiency(): number {
    // Calculate based on current value vs purchase price
    const purchasePrice = parseFloat(this.asset?.purchase_price) || 0;
    const currentValue = this.calculateCurrentValue();

    if (purchasePrice === 0) return 85;

    const efficiency = (currentValue / purchasePrice) * 100;
    return Math.min(Math.max(efficiency, 0), 100);
  }

  formatCurrency(amount: number): string {
    return amount.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });
  }

  getCurrencySymbol(): string {
    return this.currencyService.getSymbol();
  }

  calculateCurrentValue(): number {
    const purchasePrice = parseFloat(this.asset?.purchase_price) || 0;
    const depreciation = this.calculateDepreciation();
    // Round to 2 decimal places to avoid floating point precision issues
    return Math.round(Math.max(purchasePrice - depreciation, 0) * 100) / 100;
  }

  getROIColor(roi: number): string {
    if (roi >= 0) return 'text-green-600';
    return 'text-red-600';
  }

  getPerformanceTrend(): string {
    const healthScore = this.asset?.health_score || 0;

    if (healthScore >= 80) return 'Improving';
    if (healthScore >= 60) return 'Stable';
    if (healthScore >= 40) return 'Declining';
    return 'Critical';
  }

  getCostEfficiencyTrend(): string {
    const efficiency = this.getCostEfficiency();

    if (efficiency >= 80) return 'Optimal';
    if (efficiency >= 60) return 'Good';
    if (efficiency >= 40) return 'Fair';
    return 'Poor';
  }

  getMaintenanceTrend(): string {
    const healthScore = this.asset?.health_score || 0;

    if (healthScore >= 80) return 'Low';
    if (healthScore >= 60) return 'Stable';
    if (healthScore >= 40) return 'Increasing';
    return 'High';
  }

  getTrendColor(trend: string): string {
    switch (trend.toLowerCase()) {
      case 'improving':
      case 'optimal':
      case 'low':
        return 'text-green-600';
      case 'stable':
      case 'good':
        return 'text-blue-600';
      case 'declining':
      case 'fair':
      case 'increasing':
        return 'text-yellow-600';
      case 'critical':
      case 'poor':
      case 'high':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  }

  getTrendIcon(trend: string): string {
    switch (trend.toLowerCase()) {
      case 'improving':
      case 'optimal':
        return 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6';
      case 'declining':
      case 'critical':
        return 'M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6';
      case 'stable':
      case 'good':
      case 'fair':
      case 'low':
      case 'increasing':
      case 'high':
      default:
        return 'M20 12H4';
    }
  }

  getFinancialAlerts(): any[] {
    const alerts = [];
    const healthScore = this.asset?.health_score || 0;
    const currentValue = this.calculateCurrentValue();
    const purchasePrice = parseFloat(this.asset?.purchase_price) || 0;

    if (healthScore < 40) {
      alerts.push({
        message: 'Asset health is critical - consider replacement',
        class: 'bg-red-50 text-red-700'
      });
    }

    if (currentValue < purchasePrice * 0.3) {
      alerts.push({
        message: 'Asset value has depreciated significantly',
        class: 'bg-orange-50 text-orange-700'
      });
    }

    if (this.asset?.warranty === 'None' || !this.asset?.warranty) {
      alerts.push({
        message: 'No warranty coverage - maintenance costs may increase',
        class: 'bg-yellow-50 text-yellow-700'
      });
    }

    return alerts;
  }

  getPredictiveAlerts(): any[] {
    const alerts = [];
    const healthScore = this.asset?.health_score || 0;
    const age = this.getAssetAge();

    if (healthScore < 60) {
      alerts.push({
        title: 'Maintenance Alert',
        message: 'Schedule preventive maintenance within 30 days',
        class: 'bg-orange-50 text-orange-700'
      });
    }

    if (healthScore < 40) {
      alerts.push({
        title: 'Critical Alert',
        message: 'Asset requires immediate attention',
        class: 'bg-red-50 text-red-700'
      });
    }

    if (age.includes('year') && parseInt(age) > 5) {
      alerts.push({
        title: 'Age Alert',
        message: 'Asset is aging - consider replacement planning',
        class: 'bg-blue-50 text-blue-700'
      });
    }

    return alerts;
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
      element.scrollIntoView({behavior: 'smooth'});
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
        this.toastService.success('Copied to clipboard');
      }).catch(err => {
        console.error('Failed to copy asset ID:', err);
        this.toastService.error('Failed to copy asset ID');
      });
    }
  }

  copySerialNumber() {
    if (this.asset?.serial_number) {
      navigator.clipboard.writeText(this.asset.serial_number).then(() => {
        this.toastService.success('Copied to clipboard');
      }).catch(err => {
        console.error('Failed to copy serial number:', err);
        this.toastService.error('Failed to copy serial number');
      });
    }
  }

  // Financial calculation methods
  calculateDepreciation(): number {
    if (!this.asset?.purchase_price) return 0;
    const currentValue = this.asset.current_value || this.asset.purchase_price;
    // Round to 2 decimal places to avoid floating point precision issues
    return Math.round((this.asset.purchase_price - currentValue) * 100) / 100;
  }

  calculateDepreciationRate(): number {
    const usefulLife = this.asset?.depreciation || 10;
    return Math.round((1 / usefulLife) * 100);
  }

  // Asset Depreciation Chart Methods
  getMaxDepreciationValue(): number {
    return this.asset?.purchase_price || 10000;
  }

  getDepreciationPath(): string {
    const maxValue = this.getMaxDepreciationValue();
    const purchaseDate = this.asset?.purchase_date ? new Date(this.asset.purchase_date) : new Date();
    const currentDate = new Date();
    const usefulLife = 10;
    const endDate = new Date(purchaseDate.getTime() + (usefulLife * 365.25 * 24 * 60 * 60 * 1000));

    // Generate points for the depreciation line
    const points: string[] = [];
    const totalDays = (endDate.getTime() - purchaseDate.getTime()) / (1000 * 60 * 60 * 24);

    for (let i = 0; i <= 12; i++) {
      const days = (totalDays * i) / 12;
      const date = new Date(purchaseDate.getTime() + (days * 24 * 60 * 60 * 1000));
      const yearsElapsed = (date.getTime() - purchaseDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
      const annualDepreciation = maxValue / usefulLife;
      const totalDepreciation = Math.min(annualDepreciation * yearsElapsed, maxValue);
      const currentValue = Math.max(0, maxValue - totalDepreciation);

      const x = (i / 12) * 100;
      const y = 100 - ((currentValue / maxValue) * 100);

      points.push(`${x},${y}`);
    }

    return `M ${points.join(' L ')}`;
  }

  getCurrentPeriodX(): number {
    if (!this.asset?.purchase_date) return 0;

    const purchaseDate = new Date(this.asset.purchase_date);
    const currentDate = new Date();
    const usefulLife = 10;
    const endDate = new Date(purchaseDate.getTime() + (usefulLife * 365.25 * 24 * 60 * 60 * 1000));

    const totalDays = (endDate.getTime() - purchaseDate.getTime()) / (1000 * 60 * 60 * 24);
    const elapsedDays = (currentDate.getTime() - purchaseDate.getTime()) / (1000 * 60 * 60 * 24);

    return Math.min(100, Math.max(0, (elapsedDays / totalDays) * 100));
  }

  getCurrentPeriodY(): number {
    const currentValue = this.calculateCurrentValue();
    const maxValue = this.getMaxDepreciationValue();
    return 100 - ((currentValue / maxValue) * 100);
  }

  getDepreciationDates(): Date[] {
    const purchaseDate = this.asset?.purchase_date ? new Date(this.asset.purchase_date) : new Date();
    const usefulLife = 10;
    const endDate = new Date(purchaseDate.getTime() + (usefulLife * 365.25 * 24 * 60 * 60 * 1000));

    const dates: Date[] = [];
    for (let i = 0; i <= 12; i++) {
      const days = ((endDate.getTime() - purchaseDate.getTime()) / (1000 * 60 * 60 * 24) * i) / 12;
      dates.push(new Date(purchaseDate.getTime() + (days * 24 * 60 * 60 * 1000)));
    }

    return dates;
  }

  calculateAnnualDepreciation(): number {
    const maxValue = this.getMaxDepreciationValue();
    const usefulLife = 10;
    return maxValue / usefulLife;
  }

  calculateRemainingYears(): number {
    if (!this.asset?.purchase_date) return 10;

    const purchaseDate = new Date(this.asset.purchase_date);
    const currentDate = new Date();
    const usefulLife = 10;
    const yearsElapsed = (currentDate.getTime() - purchaseDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);

    // Round to 2 decimal places to avoid floating point precision issues
    return Math.round(Math.max(0, usefulLife - yearsElapsed) * 100) / 100;
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
    this.showTransferModal = true;
  }

  onTransferComplete(response: any) {
    console.log('Transfer completed:', response);
    // Reload asset data to reflect the transfer
    if (this.asset?.id) {
      this.loadAsset(this.asset.id.toString());
    }
    // You could show a success message here
  }

  onTransferModalClose() {
    this.showTransferModal = false;
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

  onCategoryIconError(event: any, category: any) {
    if (category) {
      category.iconError = true;
    }
  }

  downloadQRCode() {
    if (this.qrCodeDataUrl) {
      const link = document.createElement('a');
      link.href = this.qrCodeDataUrl;
      link.download = `asset-${this.asset.id}-qr.png`;
      link.click();
    } else if (this.asset?.qr_code_url) {
      // Fallback to server-generated QR code
      const link = document.createElement('a');
      link.href = this.asset.qr_code_url;
      link.download = `asset-${this.asset.id}-qr.png`;
      link.click();
    } else {
      // Generate QR code on demand
      this.generateQRCode();
    }
  }

  downloadBarcode() {
    if (this.asset?.barcode_url) {
      const link = document.createElement('a');
      link.href = this.asset.barcode_url;
      link.download = `asset-${this.asset.asset_id || this.asset.id}-barcode.png`;
      link.click();
    } else if (this.barcodeDataUrl) {
      // Fallback to generated barcode
      const link = document.createElement('a');
      link.href = this.barcodeDataUrl;
      link.download = `asset-${this.asset.asset_id || this.asset.id}-barcode.png`;
      link.click();
    } else {
      // Generate barcode on demand
      this.generateBarcode();
    }
  }

  generateQRCode() {
    if (!this.asset) return;

    this.qrCodeLoading = true;
    const publicUrl = `${window.location.origin}/public/asset/${this.asset.id}`;

    QRCode.toDataURL(publicUrl, {
      width: 300,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    }).then((dataUrl) => {
      this.qrCodeDataUrl = dataUrl;
      this.qrCodeLoading = false;
      // Auto-download after generation
      // this.downloadQRCode();
    }).catch((error) => {
      console.error('Error generating QR code:', error);
      this.qrCodeLoading = false;
    });
  }

  generateBarcode() {
    if (!this.asset?.asset_id) return;

    this.barcodeLoading = true;
    const assetId = this.asset.asset_id;

    // Use QuickChart.io service to generate barcode
    const barcodeUrl = `https://quickchart.io/barcode?c=${encodeURIComponent(assetId)}&chs=300x100&chld=L%7C0&choe=UTF-8`;

    // Convert the URL to a data URL for download
    fetch(barcodeUrl)
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.barcodeDataUrl = reader.result as string;
          this.barcodeLoading = false;
        };
        reader.readAsDataURL(blob);
      })
      .catch((error) => {
        console.error('Error generating barcode:', error);
        this.barcodeLoading = false;
      });
  }

  copyQRCodeUrl() {
    if (this.asset?.qr_code_url) {
      navigator.clipboard.writeText(this.asset.qr_code_url).then(() => {
        console.log('QR code URL copied to clipboard');
      });
    }
  }

  copyPublicUrl() {
    const publicUrl = `${window.location.origin}/public/asset/${this.asset.id}`;
    navigator.clipboard.writeText(publicUrl).then(() => {
      console.log('Public URL copied to clipboard');
    });
  }

  get windowLocation(): string {
    return window.location.origin;
  }

  showFullActivityHistory() {
    this.loadFullActivityHistory();
    this.showActivityHistoryModal = true;
  }

  closeActivityHistoryModal() {
    this.showActivityHistoryModal = false;
    // Reset pagination and filters when closing modal
    this.activityHistoryParams = {
      page: 1,
      per_page: 15,
      sort_by: 'created_at',
      sort_dir: 'desc',
      search: '',
      action: '',
      user_id: '',
      date_from: '',
      date_to: ''
    };
    this.activityHistoryPagination = null;
  }

  // Activity history pagination and filtering methods
  onActivityHistoryPageChange(page: number) {
    this.activityHistoryParams['page'] = page;
    this.loadFullActivityHistory();
  }

  onActivityHistorySearch(search: string) {
    this.activityHistoryParams['search'] = search;
    this.activityHistoryParams['page'] = 1; // Reset to first page
    this.loadFullActivityHistory();
  }

  onActivityHistoryFilter(filterType: string, value: string) {
    this.activityHistoryParams[filterType] = value;
    this.activityHistoryParams['page'] = 1; // Reset to first page
    this.loadFullActivityHistory();
  }

  onActivityHistorySort(sortBy: string, sortDir: string) {
    this.activityHistoryParams['sort_by'] = sortBy;
    this.activityHistoryParams['sort_dir'] = sortDir;
    this.loadFullActivityHistory();
  }

  clearActivityHistoryFilters() {
    this.activityHistoryParams = {
      page: 1,
      per_page: 15,
      sort_by: 'created_at',
      sort_dir: 'desc',
      search: '',
      action: '',
      user_id: '',
      date_from: '',
      date_to: ''
    };
    this.loadFullActivityHistory();
  }

  loadFullActivityHistory() {
    if (!this.asset?.id) return;

    this.activityHistoryLoading = true;
    this.activityHistoryError = '';

    this.assetService.getActivityHistory(this.asset.id, this.activityHistoryParams)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.fullActivityHistory = response.data.data || [];
            this.activityHistoryPagination = response.data;
          } else {
            this.activityHistoryError = response.message || 'Failed to load full activity history';
          }
          this.activityHistoryLoading = false;
        },
        error: (error) => {
          this.activityHistoryError = error.error?.message || 'An error occurred while loading full activity history';
          this.activityHistoryLoading = false;
        }
      });
  }

  viewFullImage(imageUrl: string) {
    window.open(imageUrl, '_blank');
  }

  // Helper methods for activity history data formatting
  formatActivityBeforeAfter(before: any, after: any): string {
    if (!before && !after) return '';

    let changes: string[] = [];

    if (before && after) {
      // Compare before and after to show what changed
      const beforeKeys = Object.keys(before);
      const afterKeys = Object.keys(after);

      for (const key of afterKeys) {
        if (before[key] !== after[key]) {
          const fieldName = this.getFieldDisplayName(key);
          if (fieldName) {
            changes.push(`${fieldName}: ${this.formatFieldValue(before[key])} → ${this.formatFieldValue(after[key])}`);
          }
        }
      }
    } else if (after) {
      // New record - show key fields
      const keyFields = ['name', 'type', 'status', 'location_id', 'department_id', 'purchase_price'];
      for (const key of keyFields) {
        if (after[key] !== undefined && after[key] !== null) {
          const fieldName = this.getFieldDisplayName(key);
          if (fieldName) {
            changes.push(`${fieldName}: ${this.formatFieldValue(after[key])}`);
          }
        }
      }
    } else if (before) {
      // Deleted record - show what was deleted
      const keyFields = ['name', 'type', 'status'];
      for (const key of keyFields) {
        if (before[key] !== undefined && before[key] !== null) {
          const fieldName = this.getFieldDisplayName(key);
          if (fieldName) {
            changes.push(`${fieldName}: ${this.formatFieldValue(before[key])} (deleted)`);
          }
        }
      }
    }

    return changes.length > 0 ? changes.join(', ') : '';
  }

  getFieldDisplayName(fieldKey: string): string {
    const fieldMap: { [key: string]: string } = {
      'name': 'Asset Name',
      'type': 'Type',
      'model': 'Model',
      'status': 'Status',
      'description': 'Description',
      'location_id': 'Location',
      'department_id': 'Department',
      'purchase_price': 'Purchase Price',
      'purchase_date': 'Purchase Date',
      'serial_number': 'Serial Number',
      'asset_id': 'Asset ID',
      'warranty': 'Warranty',
      'insurance': 'Insurance',
      'depreciation': 'Depreciation',
      'health_score': 'Health Score',
      'manufacturer': 'Manufacturer',
      'category_id': 'Category'
    };

    return fieldMap[fieldKey] || fieldKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  formatFieldValue(value: any): string {
    if (value === null || value === undefined) return 'N/A';
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    if (typeof value === 'number') {
      // Format currency for price fields
      if (value.toString().includes('.')) {
        return `${this.getCurrencySymbol()}${value.toFixed(2)}`;
      }
      return value.toString();
    }
    if (typeof value === 'string') {
      // Check if it's a date
      if (value.match(/^\d{4}-\d{2}-\d{2}/)) {
        return new Date(value).toLocaleDateString();
      }
      return value;
    }
    return JSON.stringify(value);
  }

  getUserDisplayName(user: any): string {
    if (!user) return 'System';
    if (user.name) return user.name;
    if (user.email) return user.email.split('@')[0]; // Use email prefix as fallback
    return 'Unknown User';
  }

  getActivityIcon(action: string): string {
    const iconMap: { [key: string]: string } = {
      'created': 'M12 6v6m0 0v6m0-6h6m-6 0H6',
      'updated': 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
      'deleted': 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
      'transferred': 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
      'maintenance': 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
      'imported': 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10'
    };

    return iconMap[action] || 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z';
  }

  getActivityColor(action: string): string {
    const colorMap: { [key: string]: string } = {
      'created': 'bg-green-100 text-green-600',
      'updated': 'bg-blue-100 text-blue-600',
      'deleted': 'bg-red-100 text-red-600',
      'transferred': 'bg-purple-100 text-purple-600',
      'maintenance': 'bg-orange-100 text-orange-600',
      'imported': 'bg-indigo-100 text-indigo-600'
    };

    return colorMap[action] || 'bg-gray-100 text-gray-600';
  }

  sharePublicUrl() {
    if (this.asset?.id) {
      const publicUrl = `${window.location.origin}/public/asset/${this.asset.id}`;
      navigator.clipboard.writeText(publicUrl).then(() => {
        // Could add a toast notification here
        console.log('Public URL copied to clipboard:', publicUrl);
        alert('Public URL copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy URL:', err);
        alert('Failed to copy URL to clipboard');
      });
    }
  }
}
