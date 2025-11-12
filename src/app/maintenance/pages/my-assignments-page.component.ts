import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MaintenanceService } from '../maintenance.service';
import { AssignedMaintenance } from '../models';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-my-assignments-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './my-assignments-page.component.html',
  styleUrls: ['./my-assignments-page.component.scss']
})
export class MyAssignmentsPageComponent implements OnInit {
  loading = false;
  assignments: AssignedMaintenance[] = [];
  filteredAssignments: AssignedMaintenance[] = [];
  filter: 'all' | 'pending' | 'completed' = 'all';

  constructor(
    private service: MaintenanceService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadAssignments();
  }

  loadAssignments(): void {
    this.loading = true;
    this.service.getMyAssignments().subscribe({
      next: (response) => {
        this.assignments = response.data;
        this.applyFilter();
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading assignments:', error);
        this.toastService.error('Failed to load assignments. Please try again.');
        this.loading = false;
      }
    });
  }

  applyFilter(): void {
    if (this.filter === 'all') {
      this.filteredAssignments = this.assignments;
    } else if (this.filter === 'pending') {
      this.filteredAssignments = this.assignments.filter(a => !this.isCompleted(a));
    } else if (this.filter === 'completed') {
      this.filteredAssignments = this.assignments.filter(a => this.isCompleted(a));
    }
  }

  setFilter(filter: 'all' | 'pending' | 'completed'): void {
    this.filter = filter;
    this.applyFilter();
  }

  isCompleted(assignment: AssignedMaintenance): boolean {
    const totalItems = assignment.checklist_items?.length || 0;
    const completedItems = assignment.responses?.length || 0;
    return totalItems > 0 && completedItems === totalItems;
  }

  getCompletionPercentage(assignment: AssignedMaintenance): number {
    const totalItems = assignment.checklist_items?.length || 0;
    if (totalItems === 0) return 0;
    const completedItems = assignment.responses?.length || 0;
    return Math.round((completedItems / totalItems) * 100);
  }

  getStatusClass(assignment: AssignedMaintenance): string {
    if (this.isCompleted(assignment)) {
      return 'status-completed';
    } else if (this.isDueToday(assignment)) {
      return 'status-due-today';
    } else if (this.isOverdue(assignment)) {
      return 'status-overdue';
    }
    return 'status-pending';
  }

  getStatusLabel(assignment: AssignedMaintenance): string {
    if (this.isCompleted(assignment)) {
      return 'Completed';
    } else if (this.isOverdue(assignment)) {
      return 'Overdue';
    } else if (this.isDueToday(assignment)) {
      return 'Due Today';
    }
    return 'Pending';
  }

  isDueToday(assignment: AssignedMaintenance): boolean {
    if (!assignment.schedule?.due_date) return false;
    const today = new Date().toDateString();
    const dueDate = new Date(assignment.schedule.due_date).toDateString();
    return today === dueDate;
  }

  isOverdue(assignment: AssignedMaintenance): boolean {
    if (!assignment.schedule?.due_date) return false;
    const today = new Date();
    const dueDate = new Date(assignment.schedule.due_date);
    return dueDate < today && !this.isCompleted(assignment);
  }

  formatDate(dateString?: string): string {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  startMaintenance(assignment: AssignedMaintenance): void {
    this.router.navigate(['/maintenance/complete', assignment.id]);
  }
}

