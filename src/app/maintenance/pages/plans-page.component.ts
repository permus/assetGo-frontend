import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaintenanceStore } from '../store';
import { PlanDialogComponent } from '../components/plan-dialog/plan-dialog.component';
import { MaintenancePlan } from '../models';

@Component({
  selector: 'app-plans-page',
  standalone: true,
  imports: [CommonModule, FormsModule, PlanDialogComponent],
  templateUrl: './plans-page.component.html',
  styleUrls: ['./plans-page.component.scss']
})
export class PlansPageComponent implements OnInit {
  isDialogOpen = false;
  viewType: 'grid' | 'list' = 'grid';
  searchQuery = '';
  selectedPlans: MaintenancePlan[] = [];
  showingArchived = false;
  planMenus: { [key: number]: boolean } = {};

  constructor(public store: MaintenanceStore) {}

  ngOnInit(): void { 
    this.store.fetchPlans(); 
  }

  openDialog() { 
    this.isDialogOpen = true; 
  }

  onCreated() { 
    this.isDialogOpen = false; 
    this.store.fetchPlans(); 
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

  deleteSelected() {
    // TODO: Implement delete functionality
    console.log('Deleting selected plans:', this.selectedPlans);
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
    // TODO: Implement search functionality
    console.log('Searching for:', this.searchQuery);
  }

  // View toggle
  toggleViewType() {
    this.viewType = this.viewType === 'grid' ? 'list' : 'grid';
  }

  // Individual plan actions
  viewPlan(plan: MaintenancePlan) {
    // TODO: Implement view functionality
    console.log('Viewing plan:', plan);
  }

  editPlan(plan: MaintenancePlan) {
    // TODO: Implement edit functionality
    console.log('Editing plan:', plan);
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
    // TODO: Implement delete functionality
    console.log('Deleting plan:', plan);
  }

  togglePlanMenu(planId: number) {
    this.planMenus[planId] = !this.planMenus[planId];
  }

  isPlanMenuOpen(planId: number): boolean {
    return this.planMenus[planId] || false;
  }
}


