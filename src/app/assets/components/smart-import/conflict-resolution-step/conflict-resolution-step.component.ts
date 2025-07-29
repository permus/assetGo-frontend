import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetImportService, ImportConflict } from '../../../services/asset-import.service';

@Component({
  selector: 'app-conflict-resolution-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conflict-resolution-step.component.html',
  styleUrls: ['./conflict-resolution-step.component.scss']
})
export class ConflictResolutionStepComponent implements OnInit {
  @Input() fileId: string | null = null;
  @Input() mappings: any[] = [];
  @Output() conflictsResolved = new EventEmitter<any>();

  conflicts: ImportConflict[] = [];
  importSummary: any = {
    totalRows: 0,
    validRows: 0,
    conflicts: 0,
    errors: 0
  };
  activeTab: string = 'Asset IDs';
  isDetectingConflicts = false;
  resolutions: any[] = [];

  constructor(private assetImportService: AssetImportService) {}

  ngOnInit(): void {
    if (this.fileId) {
      this.detectConflicts();
    }
  }

  private detectConflicts(): void {
    if (!this.fileId) return;

    this.isDetectingConflicts = true;
    this.assetImportService.detectConflicts(this.fileId).subscribe({
      next: (response) => {
        this.isDetectingConflicts = false;
        this.conflicts = response.data.conflicts || [];
        this.importSummary = response.data.summary || {
          totalRows: 0,
          validRows: 0,
          conflicts: this.conflicts.length,
          errors: 0
        };
      },
      error: (error) => {
        this.isDetectingConflicts = false;
        console.error('Error detecting conflicts:', error);
      }
    });
  }

  getConflictsByType(type: string): ImportConflict[] {
    return this.conflicts.filter(conflict => conflict.type === type);
  }

  getConflictCount(type: string): number {
    return this.getConflictsByType(type).length;
  }

  getTotalConflictCount(): number {
    return this.conflicts.length;
  }

  getSeverityClass(severity: string): string {
    switch (severity) {
      case 'error':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  }

  getSeverityIcon(severity: string): string {
    switch (severity) {
      case 'error':
        return 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
      case 'warning':
        return 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z';
      default:
        return 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
    }
  }

  applySuggestedFix(conflict: ImportConflict): void {
    // In a real implementation, this would apply the suggested fix
    console.log('Applying suggested fix for:', conflict);
  }

  resolveConflict(conflict: ImportConflict, resolution: string): void {
    const existingResolution = this.resolutions.find(r => r.conflictId === conflict.row);
    if (existingResolution) {
      existingResolution.resolution = resolution;
    } else {
      this.resolutions.push({
        conflictId: conflict.row,
        type: conflict.type,
        field: conflict.field,
        resolution: resolution
      });
    }
  }

  proceedWithImport(): void {
    if (this.fileId) {
      this.assetImportService.resolveConflicts(this.fileId, this.resolutions).subscribe({
        next: (response) => {
          this.conflictsResolved.emit({
            conflicts: this.conflicts,
            resolutions: this.resolutions,
            success: true
          });
        },
        error: (error) => {
          console.error('Error resolving conflicts:', error);
        }
      });
    } else {
      this.conflictsResolved.emit({
        conflicts: this.conflicts,
        resolutions: this.resolutions,
        success: true
      });
    }
  }

  cancelImport(): void {
    // Handle import cancellation
    console.log('Import cancelled');
  }
} 