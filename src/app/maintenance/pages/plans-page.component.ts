import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MaintenanceStore } from '../store';
import { MaintenanceService } from '../maintenance.service';
import { PlanDialogComponent } from '../components/plan-dialog/plan-dialog.component';
import { MaintenanceDeleteConfirmationModalComponent } from '../components/delete-confirmation-modal';

import { MaintenancePlan } from '../models';

@Component({
  selector: 'app-plans-page',
  standalone: true,
  imports: [CommonModule, FormsModule, PlanDialogComponent, MaintenanceDeleteConfirmationModalComponent],
  templateUrl: './plans-page.component.html',
  styleUrls: ['./plans-page.component.scss']
})
export class PlansPageComponent implements OnInit {
  isDialogOpen = false;
  editMode = false;
  planToEdit: MaintenancePlan | null = null;
  viewType: 'grid' | 'list' = 'grid';
  searchQuery = '';
  selectedPlans: MaintenancePlan[] = [];
  showingArchived = false;
  planMenus: { [key: number]: boolean } = [];
  searchTimeOut :any = null;  //eslint-disable-line @typescript-eslint/no-explicit-any
  // Delete modal state
  showDeleteConfirmationModal = false;

  constructor(
    public store: MaintenanceStore,
    private maintenanceService: MaintenanceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.fetchPlans();
  }

  openDialog() {
    this.editMode = false;
    this.planToEdit = null;
    this.isDialogOpen = true;
  }

  onCreated() {
    this.isDialogOpen = false;
    this.store.fetchPlans();
  }

  onUpdated() {
    this.isDialogOpen = false;
    this.editMode = false;
    this.planToEdit = null;
    this.store.fetchPlans();
  }

  onDialogClosed() {
    this.isDialogOpen = false;
    this.editMode = false;
    this.planToEdit = null;
  }



  // Selection methods
  toggleSelectAllPlans() {
    if (this.selectedPlans.length === this.store.plans().length) {
      this.selectedPlans = [];
    } else {
      this.selectedPlans = [...this.store.plans()];
    }
  }

  togglePlanSelection(plan: MaintenancePlan) {
    const index = this.selectedPlans.findIndex(p => p.id === plan.id);
    if (index > -1) {
      this.selectedPlans.splice(index, 1);
    } else {
      this.selectedPlans.push(plan);
    }
  }

  isPlanSelected(plan: MaintenancePlan): boolean {
    return this.selectedPlans.some(p => p.id === plan.id);
  }

  get selectedCount(): number {
    return this.selectedPlans.length;
  }

  // Action methods
  duplicateSelected() {
    // TODO: Implement duplicate functionality
    console.log('Duplicating selected plans:', this.selectedPlans);
  }

  generateQRCodesForSelected() {
    // TODO: Implement QR code generation
    console.log('Generating QR codes for selected plans:', this.selectedPlans);
  }

  archiveSelected() {
    // TODO: Implement archive functionality
    console.log('Archiving selected plans:', this.selectedPlans);
  }

  deleteSelected(deletionReason?: string) {
    if (this.selectedPlans.length === 0) {
      this.closeDeleteModal();
      return;
    }

    // Get plan IDs for bulk delete
    const planIds = this.selectedPlans.map(plan => plan.id!);

    // Delete plans one by one (since there's no bulk delete endpoint)
    let completed = 0;
    let successCount = 0;
    let errorCount = 0;

    const finalize = () => {
      completed++;
      if (completed >= planIds.length) {
        // Reload plans and clear selection
        this.store.fetchPlans();
        this.clearSelection();
        this.closeDeleteModal();

        // Show success/error message
        if (errorCount === 0) {
          console.log(`${successCount} plans deleted successfully`);
        } else if (successCount === 0) {
          console.error(`Failed to delete ${errorCount} plans`);
        } else {
          console.log(`${successCount} plans deleted successfully, ${errorCount} failed`);
        }
      }
    };

    planIds.forEach((id) => {
      // Use the maintenance service directly since store.api is private
      this.maintenanceService.deletePlan(id).subscribe({
        next: () => {
          successCount++;
          finalize();
        },
        error: (error) => {
          console.error('Failed to delete plan:', error);
          errorCount++;
          finalize();
        }
      });
    });
  }

  restoreSelected() {
    // TODO: Implement restore functionality
    console.log('Restoring selected plans:', this.selectedPlans);
  }

  clearSelection() {
    this.selectedPlans = [];
  }

  // Search and filtering
  onSearch() {
    if (this.searchTimeOut) {
      clearTimeout(this.searchTimeOut);
    }
    this.searchTimeOut = setTimeout(() => {
      this.store.fetchPlans(this.searchQuery);
    }, 500);
  }
onShowChange(event: any) {
  this.store.fetchPlans(this.searchQuery, event.target.value);
}

  // View toggle
  toggleViewType() {
    this.viewType = this.viewType === 'grid' ? 'list' : 'grid';
  }

  // Individual plan actions
  viewPlan(plan: MaintenancePlan) {
    // Navigate to the preview page
    this.router.navigate(['/maintenance/plans', plan.id]);
    this.closeAllDropdowns();
  }

  editPlan(plan: MaintenancePlan) {
    // Close the dropdown menu
    this.planMenus[plan.id!] = false;

    // Set edit mode and plan to edit
    this.editMode = true;
    this.planToEdit = plan;

    // Open the dialog
    this.isDialogOpen = true;
  }

  duplicatePlan(plan: MaintenancePlan) {
    // TODO: Implement duplicate functionality
    console.log('Duplicating plan:', plan);
  }

  generateQRCodeForPlan(plan: MaintenancePlan) {
    // TODO: Implement QR code generation
    console.log('Generating QR code for plan:', plan);
  }

  copyPublicUrl(plan: MaintenancePlan) {
    // TODO: Implement copy URL functionality
    console.log('Copying public URL for plan:', plan);
  }

  archivePlan(plan: MaintenancePlan) {
    // TODO: Implement archive functionality
    console.log('Archiving plan:', plan);
  }

  restorePlan(plan: MaintenancePlan) {
    // TODO: Implement restore functionality
    console.log('Restoring plan:', plan);
  }

  deletePlan(plan: MaintenancePlan) {
    // Close the dropdown menu
    this.planMenus[plan.id!] = false;

    // Set the selected plan for single deletion
    this.selectedPlans = [plan];

    // Open the delete confirmation modal
    this.showDeleteConfirmationModal = true;
  }

  togglePlanMenu(planId: number, event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.planMenus[planId] = !this.planMenus[planId];
  }

  isPlanMenuOpen(planId: number): boolean {
    return this.planMenus[planId] || false;
  }

  @HostListener('document:click')
  closeAllDropdowns() {
    // Close all open dropdown menus when clicking outside
    Object.keys(this.planMenus).forEach(key => {
      this.planMenus[Number(key)] = false;
    });
  }

  // Delete modal methods
  closeDeleteModal(): void {
    this.showDeleteConfirmationModal = false;
  }

  openDeleteModalForSelected(): void {
    if (this.selectedPlans.length === 0) {
      return;
    }
    this.showDeleteConfirmationModal = true;
  }
}


