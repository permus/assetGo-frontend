import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceStore } from '../store';
import { PlanDialogComponent } from '../components/plan-dialog/plan-dialog.component';
import { PlanCardSkeletonComponent } from '../components/plan-card-skeleton.component';

@Component({
  selector: 'app-plans-page',
  standalone: true,
  imports: [CommonModule, PlanDialogComponent, PlanCardSkeletonComponent],
  templateUrl: './plans-page.component.html',
  styleUrls: ['./plans-page.component.scss']
})
export class PlansPageComponent implements OnInit {
  isDialogOpen = false;
  constructor(public store: MaintenanceStore) {}
  ngOnInit(): void { this.store.fetchPlans(); }
  openDialog() { this.isDialogOpen = true; }
  onCreated() { this.isDialogOpen = false; this.store.fetchPlans(); }
}


