import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlaService } from '../sla.service';
import { SlaDefinition } from '../models';
import { SlaRuleFormDialogComponent } from '../components/sla-rule-form-dialog.component';
import { ToastService } from '../../core/services/toast.service';
import { ClickOutsideDirective } from '../../shared/directives/click-outside/click-outside.directive';

@Component({
  selector: 'app-sla-rules-page',
  standalone: true,
  imports: [CommonModule, FormsModule, SlaRuleFormDialogComponent, ClickOutsideDirective],
  templateUrl: './sla-rules-page.component.html',
  styleUrls: ['./sla-rules-page.component.scss']
})
export class SlaRulesPageComponent implements OnInit {
  definitions = signal<SlaDefinition[]>([]);
  loading = signal(false);
  isDialogOpen = signal(false);
  editMode = signal(false);
  definitionToEdit = signal<SlaDefinition | null>(null);
  menuOpen = signal<{ [key: number]: boolean }>({});

  constructor(
    private slaService: SlaService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadDefinitions();
  }

  loadDefinitions(): void {
    this.loading.set(true);
    this.slaService.listDefinitions().subscribe({
      next: (response) => {
        if (response.success) {
          this.definitions.set(response.data.definitions);
        }
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Failed to load SLA definitions:', error);
        this.toast.error('Failed to load SLA definitions');
        this.loading.set(false);
      }
    });
  }

  openCreateDialog(): void {
    this.editMode.set(false);
    this.definitionToEdit.set(null);
    this.isDialogOpen.set(true);
  }

  openEditDialog(definition: SlaDefinition): void {
    this.editMode.set(true);
    this.definitionToEdit.set(definition);
    this.isDialogOpen.set(true);
  }

  onDialogClosed(): void {
    this.isDialogOpen.set(false);
    this.editMode.set(false);
    this.definitionToEdit.set(null);
  }

  onSaved(): void {
    this.onDialogClosed();
    this.loadDefinitions();
  }

  toggleMenu(id: number): void {
    this.menuOpen.update(menus => ({
      ...menus,
      [id]: !menus[id]
    }));
  }

  closeMenu(id: number): void {
    this.menuOpen.update(menus => ({
      ...menus,
      [id]: false
    }));
  }

  toggleActive(definition: SlaDefinition): void {
    if (!definition.id) return;
    
    this.slaService.toggleActive(definition.id).subscribe({
      next: (response) => {
        if (response.success) {
          this.loadDefinitions();
          this.toast.success(`SLA rule ${response.data.isActive ? 'activated' : 'deactivated'} successfully`);
        }
      },
      error: (error) => {
        console.error('Failed to toggle SLA definition:', error);
        this.toast.error('Failed to toggle SLA definition');
      }
    });
  }

  deleteDefinition(definition: SlaDefinition): void {
    if (!definition.id) return;
    
    if (!confirm(`Are you sure you want to delete "${definition.name}"?`)) {
      return;
    }

    this.slaService.deleteDefinition(definition.id).subscribe({
      next: (response) => {
        if (response.success) {
          this.loadDefinitions();
          this.toast.success('SLA rule deleted successfully');
          this.closeMenu(definition.id!);
        }
      },
      error: (error) => {
        console.error('Failed to delete SLA definition:', error);
        this.toast.error('Failed to delete SLA definition');
      }
    });
  }

  getAppliesToLabel(appliesTo: string): string {
    const labels: { [key: string]: string } = {
      'work_orders': 'Work Orders',
      'maintenance': 'Maintenance',
      'both': 'Both'
    };
    return labels[appliesTo] || appliesTo;
  }

  getPriorityLabel(priority?: string | null): string {
    if (!priority) return '';
    return priority.charAt(0).toUpperCase() + priority.slice(1);
  }

  formatWorkingDays(days: string[]): string {
    return days.map(day => day.charAt(0).toUpperCase() + day.slice(1)).join(', ');
  }
}

