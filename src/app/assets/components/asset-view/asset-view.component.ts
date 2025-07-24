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
      this.mockFinancialData = {
        purchaseCost: this.asset.purchase_price || 0,
        currentValue: this.asset.current_value || this.asset.purchase_price || 0,
        depreciationMethod: 'Straight Line',
        usefulLife: this.asset.depreciation || 10,
        originalValue: this.asset.purchase_price || 0
      };

      this.mockHealthData.healthScore = this.asset.health_score || 85;
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
}