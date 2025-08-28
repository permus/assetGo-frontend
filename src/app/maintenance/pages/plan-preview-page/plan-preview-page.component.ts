import {Component, OnInit, OnDestroy, HostListener} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {MaintenancePlan} from '../../models';
import {MaintenanceService} from '../../maintenance.service';
import {AssetService} from '../../../assets/services/asset.service';
import {Subject, takeUntil} from 'rxjs';
import {PlanDialogComponent} from '../../components/plan-dialog/plan-dialog.component';

@Component({
  selector: 'app-plan-preview-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, PlanDialogComponent],
  templateUrl: './plan-preview-page.component.html',
  styleUrls: ['./plan-preview-page.component.scss']
})
export class PlanPreviewPageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  editMode = false;
  planToEdit: MaintenancePlan | null = null;
  isDialogOpen = false;
  // Plan data
  plan: MaintenancePlan | null = null;
  planData: any = null;
  selectedAssets: any[] = [];
  checklistItems: any[] = [];
  scheduleInfo: any = null;
  planMenus: { [key: number]: boolean } = [];

  // Loading states
  loading = false;
  error: string | null = null;

  // UI state
  descriptionExpanded = false;
  notesExpanded = false;
  instructionsExpanded = false;
  showActionsDropdown = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private maintenanceService: MaintenanceService,
    private assetService: AssetService
  ) {
  }

  ngOnInit() {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const planId = params['id'];
      if (planId) {
        this.loadPlanData(Number(planId));
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadPlanData(planId: number) {
    this.loading = true;
    this.error = null;

    // Load the plan data from the service
    this.maintenanceService.getPlan(planId).subscribe({
      next: (response) => {
        this.plan = response.data.plan;
        console.log(response.data.plan, 'plan')
        this.loading = false;

        // Load additional data (assets, checklists, schedule)
        this.loadAdditionalData();
      },
      error: (error) => {
        this.error = 'Failed to load maintenance plan. Please try again.';
        this.loading = false;
        console.error('Error loading plan:', error);
      }
    });
  }

  loadAdditionalData() {
    if (!this.plan) return;

    // Load real asset data if asset_ids are available
    if (this.plan.asset_ids && this.plan.asset_ids.length > 0) {
      this.loadAssetData();
    } else {
      // No asset IDs, set empty assets
      this.selectedAssets = [];
    }

    // Load real checklist data if available
    if (this.plan.checklists && this.plan.checklists.length > 0) {
      this.checklistItems = this.plan.checklists;
    } else {
      // Fallback mock checklist data
      this.checklistItems = [
        {
          id: 1,
          title: 'General inspection',
          type: 'inspection',
          description: 'Perform general visual inspection of the asset',
          is_required: true,
          is_safety_critical: false,
          is_photo_required: false
        }
      ];
    }

    // Load real schedule data if available
    if (this.plan.frequency_type) {
      this.scheduleInfo = {
        frequency_type: this.plan.frequency_type,
        frequency_value: this.plan.frequency_value,
        frequency_unit: this.plan.frequency_unit,
        next_due_date: null, // This would come from schedule API
        last_completed: null  // This would come from schedule API
      };
    } else {
      // Fallback mock schedule data
      this.scheduleInfo = {
        frequency_type: 'time',
        frequency_value: 30,
        frequency_unit: 'days',
        next_due_date: null,
        last_completed: null
      };
    }

    // Set the plan data
    this.planData = {
      ...this.plan,
      assets: this.selectedAssets,
      checklists: this.checklistItems,
      schedule: this.scheduleInfo
    };
  }

  loadAssetData() {
    if (!this.plan?.asset_ids || this.plan.asset_ids.length === 0) {
      this.selectedAssets = [];
      return;
    }

    // Try to fetch assets by IDs in bulk first
    const assetIds = this.plan.asset_ids.join(',');
    this.assetService.getAssets({ids: assetIds}).subscribe({
      next: (response: any) => {
        if (response.success && response.data && Array.isArray(response.data)) {
          this.selectedAssets = response.data.map((asset: any) => ({
            id: asset.id,
            name: asset.name,
            asset_code: asset.asset_code,
            location: asset.location,
            status: asset.status,
            category: asset.category
          }));
        } else {
          // Fallback: fetch assets individually
          this.loadAssetsIndividually();
        }
      },
      error: (error: any) => {
        console.error('Error loading assets in bulk:', error);
        // Fallback: fetch assets individually
        this.loadAssetsIndividually();
      }
    });
  }

  loadAssetsIndividually() {
    if (!this.plan?.asset_ids || this.plan.asset_ids.length === 0) {
      this.selectedAssets = [];
      return;
    }

    console.log('Loading assets individually for IDs:', this.plan.asset_ids);

    const assetPromises = this.plan.asset_ids.map(id =>
      this.assetService.getAsset(id).toPromise()
    );

    Promise.all(assetPromises)
      .then((responses: any[]) => {
        console.log('Individual asset responses:', responses);
        this.selectedAssets = responses
          .filter(response => response && response.success && response.data)
          .map(response => {
            const asset = response.data;
            return {
              id: asset.id,
              name: asset.name || 'Unnamed Asset',
              asset_code: asset.asset_code || 'No Code',
              location: asset.location || {name: 'Location not specified'},
              status: asset.status || {name: 'Unknown'},
              category: asset.category || {name: 'Uncategorized'}
            };
          });
        console.log('Processed individual assets:', this.selectedAssets);
      })
      .catch((error: any) => {
        console.error('Error loading assets individually:', error);
        this.selectedAssets = [];
      });
  }

  editPlan(plan: any) {
    // Close the dropdown menu
    this.planMenus[plan.id!] = false;

    // Set edit mode and plan to edit
    this.editMode = true;
    this.planToEdit = plan;

    // Open the dialog
    this.isDialogOpen = true;
  }

  backToPlans() {
    this.router.navigate(['/maintenance/plans']);
  }

  duplicatePlan() {
    // TODO: Implement duplicate functionality
    console.log('Duplicate plan:', this.plan?.id);
  }

  exportPlan() {
    // TODO: Implement export functionality
    console.log('Export plan:', this.plan?.id);
  }

  printPlan() {
    // TODO: Implement print functionality
    window.print();
  }

  sharePlan() {
    // TODO: Implement share functionality
    console.log('Share plan:', this.plan?.id);
  }

  copyPlanId() {
    if (this.planData?.id && navigator.clipboard) {
      navigator.clipboard.writeText(this.planData.id.toString())
        .then(() => {
          // Could add a toast notification here
          console.log('Plan ID copied to clipboard');
        })
        .catch(err => {
          console.error('Failed to copy plan ID:', err);
        });
    }
  }

  getPriorityColor(priority: string): string {
    switch (priority?.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  getPlanTypeColor(type: string): string {
    switch (type?.toLowerCase()) {
      case 'preventive':
        return 'bg-blue-100 text-blue-800';
      case 'corrective':
        return 'bg-orange-100 text-orange-800';
      case 'emergency':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  getStatusColor(status: boolean): string {
    return status ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  }

  getFrequencyLabel(type: string, value: number, unit: string): string {
    if (type === 'time') {
      return `Every ${value} ${unit}`;
    } else if (type === 'usage') {
      return `Every ${value} hours of operation`;
    } else if (type === 'condition') {
      return 'Based on condition monitoring';
    }
    return 'Custom schedule';
  }

  formatDate(date: string): string {
    if (!date) return 'Not set';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  trackByChecklistItem(index: number, item: any): number {
    return item.id || index;
  }

  // Close dropdowns when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!(event.target as Element).closest('.relative')) {
      this.showActionsDropdown = false;
    }
  }

  onUpdated() {
    this.isDialogOpen = false;
    this.editMode = false;
    this.planToEdit = null;
    if (this.plan?.id){
      this.loadPlanData(this.plan.id);
    }
  }
  onDialogClosed(){
    this.isDialogOpen = false;
    this.editMode = false;
    this.planToEdit = null;
  }
}
