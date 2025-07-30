import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AssetImportService, ImportStep, ImportSession, AnalysisResult, FieldMapping, ImportConflict, ConflictResolution, ImportResult } from '../../services/asset-import.service';
import { UploadStepComponent } from './upload-step/upload-step.component';
import { AnalyzeStepComponent } from './analyze-step/analyze-step.component';
import { FieldMappingStepComponent } from './field-mapping-step/field-mapping-step.component';
import { ConflictResolutionStepComponent } from './conflict-resolution-step/conflict-resolution-step.component';
import { ImportExecutionStepComponent } from './import-execution-step/import-execution-step.component';

@Component({
  selector: 'app-smart-import',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    UploadStepComponent,
    AnalyzeStepComponent,
    FieldMappingStepComponent,
    ConflictResolutionStepComponent,
    ImportExecutionStepComponent
  ],
  templateUrl: './smart-import.component.html',
  styleUrls: ['./smart-import.component.scss']
})
export class SmartImportComponent implements OnInit {
  currentStep = 1;
  steps: ImportStep[] = [
    { id: 1, title: 'Upload', description: 'Upload your spreadsheet', isActive: true, isCompleted: false },
    { id: 2, title: 'Analyze', description: 'Analyze spreadsheet structure', isActive: false, isCompleted: false },
    { id: 3, title: 'Map Fields', description: 'Map columns to system fields', isActive: false, isCompleted: false },
    { id: 4, title: 'Resolve', description: 'Resolve conflicts and issues', isActive: false, isCompleted: false },
    { id: 5, title: 'Import', description: 'Import assets to system', isActive: false, isCompleted: false }
  ];

  importData: {
    fileId: string | null;
    file: File | null;
    session: ImportSession | null;
    analysis: AnalysisResult | null;
    mappings: FieldMapping[];
    userOverrides: any;
    conflicts: { [group: string]: ImportConflict[] };
    resolutions: ConflictResolution[];
    result: ImportResult | null;
  } = {
    fileId: null,
    file: null,
    session: null,
    analysis: null,
    mappings: [],
    userOverrides: {},
    conflicts: {},
    resolutions: [],
    result: null
  };

  constructor(private assetImportService: AssetImportService) {}

  ngOnInit(): void {
    this.updateStepStatus();
  }

  updateStepStatus(): void {
    this.steps.forEach((step, index) => {
      step.isActive = step.id === this.currentStep;
      step.isCompleted = step.id < this.currentStep;
    });
  }

  onFileUploaded(data: { fileId: string; file: File; session: ImportSession }): void {
    this.importData.fileId = data.fileId;
    this.importData.file = data.file;
    this.importData.session = data.session;
    this.nextStep();
  }

  onAnalysisComplete(analysis: AnalysisResult): void {
    this.importData.analysis = analysis;
    this.nextStep();
  }

  onMappingComplete(data: { mappings: FieldMapping[]; userOverrides: any }): void {
    this.importData.mappings = data.mappings;
    this.importData.userOverrides = data.userOverrides;
    this.nextStep();
  }

  onConflictsResolved(data: { conflicts: { [group: string]: ImportConflict[] }; resolutions: ConflictResolution[] }): void {
    this.importData.conflicts = data.conflicts;
    this.importData.resolutions = data.resolutions;
    this.nextStep();
  }

  onImportComplete(data: { importId: string; result: ImportResult }): void {
    this.importData.result = data.result;
    // Handle import completion
    console.log('Import completed:', data);
  }

  nextStep(): void {
    if (this.currentStep < 5) {
      this.currentStep++;
      this.updateStepStatus();
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.updateStepStatus();
    }
  }

  goToStep(stepId: number): void {
    // Only allow navigation to completed steps or the next step
    if (stepId <= this.currentStep || stepId === this.currentStep + 1) {
      this.currentStep = stepId;
      this.updateStepStatus();
    }
  }

  resetImport(): void {
    this.currentStep = 1;
    this.importData = {
      fileId: null,
      file: null,
      session: null,
      analysis: null,
      mappings: [],
      userOverrides: {},
      conflicts: {},
      resolutions: [],
      result: null
    };
    this.updateStepStatus();
  }

  canNavigateToStep(stepId: number): boolean {
    // Can navigate to completed steps or the next step
    return stepId <= this.currentStep || stepId === this.currentStep + 1;
  }

  getStepStatus(stepId: number): string {
    if (stepId < this.currentStep) {
      return 'completed';
    } else if (stepId === this.currentStep) {
      return 'active';
    } else {
      return 'pending';
    }
  }

  getStepIcon(stepId: number): string {
    const status = this.getStepStatus(stepId);
    switch (status) {
      case 'completed':
        return '✓';
      case 'active':
        return '●';
      default:
        return stepId.toString();
    }
  }

  getStepClass(stepId: number): string {
    const status = this.getStepStatus(stepId);
    switch (status) {
      case 'completed':
        return 'bg-green-500 text-white';
      case 'active':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-300 text-gray-600';
    }
  }

  downloadErrorReport(): void {
    if (this.importData.result?.error_report_url) {
      const link = document.createElement('a');
      link.href = this.importData.result.error_report_url;
      link.download = 'import-error-report.csv';
      link.click();
    }
  }
} 