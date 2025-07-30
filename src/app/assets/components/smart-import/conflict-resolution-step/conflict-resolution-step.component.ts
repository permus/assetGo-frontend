import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AssetImportService, ImportConflict, ConflictResolution } from '../../../services/asset-import.service';

@Component({
  selector: 'app-conflict-resolution-step',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conflict-resolution-step.component.html',
  styleUrls: ['./conflict-resolution-step.component.scss']
})
export class ConflictResolutionStepComponent implements OnInit {
  @Input() fileId: string | null = null;
  @Output() conflictsResolved = new EventEmitter<{ conflicts: { [group: string]: ImportConflict[] }, resolutions: ConflictResolution[] }>();

  isLoading = false;
  isResolving = false;
  conflicts: { [group: string]: ImportConflict[] } = {};
  resolutions: ConflictResolution[] = [];
  errors: string[] = [];
  activeTab: string = '';

  constructor(private assetImportService: AssetImportService) {}

  ngOnInit(): void {
    if (this.fileId) {
      this.detectConflicts();
    }
  }

  private detectConflicts(): void {
    if (!this.fileId) return;

    this.isLoading = true;
    this.assetImportService.detectConflicts(this.fileId).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.conflicts = this.convertBackendConflictsToFrontend(response.conflicts || {});
        
        // Set active tab to first conflict group
        const conflictGroups = Object.keys(this.conflicts);
        if (conflictGroups.length > 0) {
          this.activeTab = conflictGroups[0];
        }
        
        // Initialize resolutions
        this.initializeResolutions();
      },
      error: (error) => {
        this.isLoading = false;
        this.errors = ['Failed to detect conflicts. Please try again.'];
        console.error('Conflict detection error:', error);
      }
    });
  }

  private convertBackendConflictsToFrontend(backendConflicts: { [group: string]: any[] }): { [group: string]: ImportConflict[] } {
    const frontendConflicts: { [group: string]: ImportConflict[] } = {};
    
    for (const [group, conflicts] of Object.entries(backendConflicts)) {
      frontendConflicts[group] = conflicts.map(conflict => ({
        type: this.getConflictTypeFromGroup(group),
        row: conflict.row,
        field: this.getFieldFromGroup(group),
        message: conflict.issue,
        severity: this.getSeverityFromGroup(group),
        value: conflict.value
      }));
    }
    
    return frontendConflicts;
  }

  private getConflictTypeFromGroup(group: string): 'duplicate' | 'missing_location' | 'invalid_status' | 'missing_required' | 'data_quality' {
    switch (group) {
      case 'Asset IDs':
      case 'Serial Numbers':
        return 'duplicate';
      case 'Locations':
        return 'missing_location';
      case 'Statuses':
        return 'invalid_status';
      case 'Data Quality':
        return 'missing_required';
      default:
        return 'data_quality';
    }
  }

  private getFieldFromGroup(group: string): string {
    switch (group) {
      case 'Asset IDs':
        return 'asset_id';
      case 'Serial Numbers':
        return 'serial_number';
      case 'Locations':
        return 'location';
      case 'Statuses':
        return 'status';
      case 'Data Quality':
        return 'name';
      default:
        return 'unknown';
    }
  }

  private getSeverityFromGroup(group: string): 'error' | 'warning' {
    switch (group) {
      case 'Asset IDs':
      case 'Serial Numbers':
      case 'Data Quality':
        return 'error';
      case 'Locations':
      case 'Statuses':
        return 'warning';
      default:
        return 'warning';
    }
  }

  private convertBackendResolutionsToFrontend(backendResolutions: { [group: string]: any[] }): ConflictResolution[] {
    const frontendResolutions: ConflictResolution[] = [];
    
    Object.values(backendResolutions).flat().forEach(resolution => {
      frontendResolutions.push({
        row: resolution.row,
        field: resolution.field,
        action: resolution.action,
        value: resolution.value
      });
    });
    
    return frontendResolutions;
  }

  private initializeResolutions(): void {
    this.resolutions = [];
    Object.values(this.conflicts).flat().forEach(conflict => {
      this.resolutions.push({
        row: conflict.row,
        field: conflict.field,
        action: 'skip',
        value: conflict.value
      });
    });
  }

  setResolution(conflict: ImportConflict, action: 'skip' | 'update' | 'create' | 'ignore', value?: any): void {
    const existingResolution = this.resolutions.find(r => r.row === conflict.row && r.field === conflict.field);
    
    if (existingResolution) {
      existingResolution.action = action;
      if (value !== undefined) {
        existingResolution.value = value;
      }
    } else {
      this.resolutions.push({
        row: conflict.row,
        field: conflict.field,
        action: action,
        value: value
      });
    }
  }

  onResolutionValueChange(conflict: ImportConflict, event: Event): void {
    const target = event.target as HTMLInputElement;
    this.setResolution(conflict, 'update', target.value);
  }

  getResolution(conflict: ImportConflict): ConflictResolution | undefined {
    return this.resolutions.find(r => r.row === conflict.row && r.field === conflict.field);
  }

  resolveAllConflicts(): void {
    if (!this.fileId) return;

    this.isResolving = true;
    
    // Convert resolutions to backend format
    const backendResolutions: { [group: string]: any[] } = {};
    Object.entries(this.conflicts).forEach(([group, conflicts]) => {
      backendResolutions[group] = conflicts.map(conflict => {
        const resolution = this.getResolution(conflict);
        return {
          row: conflict.row,
          field: conflict.field,
          action: resolution?.action || 'skip',
          value: resolution?.value || conflict.value
        };
      });
    });

    this.assetImportService.resolveConflicts(this.fileId, backendResolutions).subscribe({
      next: (response) => {
        this.isResolving = false;
        // Convert response back to frontend format
        this.resolutions = this.convertBackendResolutionsToFrontend(response.data.resolutions);
        this.conflictsResolved.emit({
          conflicts: this.conflicts,
          resolutions: this.resolutions
        });
      },
      error: (error) => {
        this.isResolving = false;
        this.errors = ['Failed to resolve conflicts. Please try again.'];
        console.error('Conflict resolution error:', error);
      }
    });
  }

  getConflictSeverityClass(severity: string): string {
    return this.assetImportService.getConflictSeverityClass(severity);
  }

  getConflictTypeLabel(type: string): string {
    switch (type) {
      case 'duplicate':
        return 'Duplicate Asset';
      case 'missing_location':
        return 'Missing Location';
      case 'invalid_status':
        return 'Invalid Status';
      case 'missing_required':
        return 'Missing Required Field';
      case 'data_quality':
        return 'Data Quality Issue';
      default:
        return type;
    }
  }

  getConflictGroups(): string[] {
    return Object.keys(this.conflicts);
  }

  getConflictsByGroup(group: string): ImportConflict[] {
    return this.conflicts[group] || [];
  }

  getTotalConflicts(): number {
    return Object.values(this.conflicts).flat().length;
  }

  getResolvedConflicts(): number {
    return this.resolutions.filter(r => r.action !== 'skip').length;
  }

  getConflictsBySeverity(severity: 'error' | 'warning'): ImportConflict[] {
    return Object.values(this.conflicts).flat().filter(c => c.severity === severity);
  }

  hasErrors(): boolean {
    return this.getConflictsBySeverity('error').length > 0;
  }

  hasWarnings(): boolean {
    return this.getConflictsBySeverity('warning').length > 0;
  }

  canProceed(): boolean {
    // Can proceed if all errors are resolved or skipped
    const errorConflicts = this.getConflictsBySeverity('error');
    const errorResolutions = this.resolutions.filter(r => {
      const conflict = errorConflicts.find(c => c.row === r.row && c.field === r.field);
      return conflict && r.action !== 'skip';
    });
    
    return errorResolutions.length === errorConflicts.length;
  }

  getConflictGroupSeverityClass(group: string): string {
    const conflicts = this.getConflictsByGroup(group);
    return conflicts.some(c => c.severity === 'error') ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800';
  }
} 