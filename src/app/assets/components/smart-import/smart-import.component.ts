import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import { AssetService } from '../../services/asset.service';
import { ImportProgressService } from '../../../shared/services/import-progress.service';
import { timer, interval, Subject, takeUntil } from 'rxjs';
import { DateFormatPipe } from '../../../core/pipes/date-format.pipe';
import { TimeFormatPipe } from '../../../core/pipes/time-format.pipe';
import { NumberFormatPipe } from '../../../core/pipes/number-format.pipe';

@Component({
  selector: 'app-smart-import',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, DateFormatPipe, TimeFormatPipe, NumberFormatPipe],
  templateUrl: './smart-import.component.html',
  styleUrls: ['./smart-import.component.scss']
})
export class SmartImportComponent implements OnDestroy {
  @Output() importComplete = new EventEmitter<void>();

  private destroy$ = new Subject<void>();

  // Step management
  currentStep = 1;
  totalSteps = 2; // Simplified to: 1. Upload, 2. Progress

  // File upload state
  uploadedFile: File | null = null;
  uploaded = false;

  // Import state
  importLoading = false;
  isImportComplete = false;
  importedCount = 0;

  // Import results
  importResults: any = null;
  showResults = false;

  // Error state
  errorMessage = '';
  showError = false;

  // These properties are now managed by ImportProgressService

  constructor(
    private assetService: AssetService,
    private router: Router,
    private importProgressService: ImportProgressService
  ) {}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Handle file upload
   */
  parseFile(event: any): void {
    const file = event.target.files[0];

    // Clear any existing errors
    this.clearError();

    if (!file) {
      this.errorMessage = 'No file selected';
      this.showError = true;
      return;
    }

    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    if (!fileExtension || !['xlsx', 'xls'].includes(fileExtension)) {
      this.errorMessage = 'Please upload a valid Excel file (.xlsx, .xls).';
      this.showError = true;
      return;
    }

    this.uploadedFile = file;
    this.uploaded = true;
    this.currentStep = 2;
  }

  /**
   * Clear error state
   */
  clearError(): void {
    this.errorMessage = '';
    this.showError = false;
  }

  /**
   * Start the bulk import process
   */
  startBulkImport(): void {
    if (!this.uploadedFile) {
      this.errorMessage = 'No file selected for import';
          this.showError = true;
          return;
        }

    this.importLoading = true;
    this.clearError();

    this.assetService.importBulkExcel(this.uploadedFile).subscribe({
      next: (response: any) => {
        this.importLoading = false;
        if (response && response.success && response.data?.job_id) {
          // Start the progress tracking using the service
          this.importProgressService.startImport(response.data.job_id, response.data);
      } else {
          this.errorMessage = response.message || 'Invalid response from server';
        this.showError = true;
      }
      },
      error: (error) => {
        this.importLoading = false;
        this.errorMessage = error.error?.message || 'Error starting import process';
      this.showError = true;
      }
    });
  }



  /**
   * Reset the import process
   */
  resetImport(): void {
    this.currentStep = 1;
    this.uploadedFile = null;
    this.uploaded = false;
    this.importLoading = false;
    this.clearError();
  }

  /**
   * Close all dropdowns when clicking outside (compatibility method)
   */
  closeAllDropdowns(): void {
    // No-op for compatibility with template
  }
}
