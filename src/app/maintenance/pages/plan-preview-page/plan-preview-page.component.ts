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
    private maintenanceService: MaintenanceService,
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
        this.checklistItems = response.data.plan.checklists;
        this.selectedAssets = response.data.plan.assets;
        // Load real schedule data if available
        if (response.data.plan.frequency_type) {
          this.scheduleInfo = {
            frequency_type: this.plan?.frequency_type,
            frequency_value: this.plan?.frequency_value,
            frequency_unit: this.plan?.frequency_unit,
            next_due_date: null, // This would come from schedule API
            last_completed: null  // This would come from schedule API
          };
        }
      },
      error: (error) => {
        this.error = 'Failed to load maintenance plan. Please try again.';
        this.loading = false;
        console.error('Error loading plan:', error);
      }
    }).add(() =>{
      this.loading = false;
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
    if (this.plan?.id && navigator.clipboard) {
      navigator.clipboard.writeText(this.plan.id.toString())
        .then(() => {
          // Could add a toast notification here
          console.log('Plan ID copied to clipboard');
        })
        .catch(err => {
          console.error('Failed to copy plan ID:', err);
        });
    }
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
