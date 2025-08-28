import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaintenancePlan } from '../../models';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-plan-preview',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './plan-preview.component.html',
  styleUrls: ['./plan-preview.component.scss']
})
export class PlanPreviewComponent implements OnInit, OnDestroy {
  @Input() plan: MaintenancePlan | null = null;
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();
  @Output() edit = new EventEmitter<MaintenancePlan>();

  private destroy$ = new Subject<void>();

  // Plan data
  planData: any = null;
  selectedAssets: any[] = [];
  checklistItems: any[] = [];
  scheduleInfo: any = null;

  // Loading states
  loading = false;
  error: string | null = null;

  ngOnInit() {
    if (this.plan && this.isOpen) {
      this.loadPlanData();
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadPlanData() {
    if (!this.plan?.id) return;

    this.loading = true;
    this.error = null;

    // Simulate API call - in real implementation, call the service
    setTimeout(() => {
      this.planData = {
        ...this.plan,
        // Mock additional data that would come from API
        assets: [
          {
            id: 1,
            name: 'HVAC Unit 1',
            asset_code: 'HVAC-001',
            location: { name: 'Building A - Floor 2' },
            status: { name: 'Active' },
            category: { name: 'HVAC Systems' }
          },
          {
            id: 2,
            name: 'Generator Backup',
            asset_code: 'GEN-001',
            location: { name: 'Basement' },
            status: { name: 'Active' },
            category: { name: 'Power Systems' }
          }
        ],
        checklists: [
          {
            id: 1,
            title: 'Check air filters',
            type: 'inspection',
            description: 'Inspect and clean air filters for proper airflow',
            is_required: true,
            is_safety_critical: false,
            is_photo_required: true
          },
          {
            id: 2,
            title: 'Test thermostat',
            type: 'test',
            description: 'Verify thermostat is functioning correctly',
            is_required: true,
            is_safety_critical: false,
            is_photo_required: false
          },
          {
            id: 3,
            title: 'Check refrigerant levels',
            type: 'inspection',
            description: 'Monitor refrigerant levels and check for leaks',
            is_required: true,
            is_safety_critical: true,
            is_photo_required: true
          }
        ],
        schedule: {
          frequency_type: 'time',
          frequency_value: 30,
          frequency_unit: 'days',
          next_due_date: '2025-02-15',
          last_completed: '2025-01-15'
        }
      };

      this.selectedAssets = this.planData.assets || [];
      this.checklistItems = this.planData.checklists || [];
      this.scheduleInfo = this.planData.schedule || null;

      this.loading = false;
    }, 500);
  }

  onBackdrop(event: Event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  close() {
    this.isOpen = false;
    this.closed.emit();
  }

  editPlan() {
    if (this.plan) {
      this.edit.emit(this.plan);
    }
  }

  getPriorityColor(priority: string): string {
    switch (priority?.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  getPlanTypeColor(type: string): string {
    switch (type?.toLowerCase()) {
      case 'preventive': return 'bg-blue-100 text-blue-800';
      case 'corrective': return 'bg-orange-100 text-orange-800';
      case 'emergency': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
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
}
