import { Component, EventEmitter, Input, Output, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InventoryAnalyticsService } from '../../../core/services/inventory-analytics.service';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';

interface ImportResponse {
  success: boolean;
  message?: string;
  data?: {
    imported_count: number;
    created_count: number;
    updated_count: number;
    failed_count: number;
    invalid_rows?: Array<{
      row_number: number;
      errors: string[];
      data?: Record<string, any>;
    }>;
    error_report_url?: string | null;
  };
}

@Component({
  selector: 'app-parts-bulk-import-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parts-bulk-import-modal.component.html',
  styleUrls: ['./parts-bulk-import-modal.component.scss']
})
export class PartsBulkImportModalComponent implements OnInit {
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() importComplete = new EventEmitter<void>();
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  // Permission check
  canAccess = false;

  // File upload
  selectedFile: File | null = null;
  
  // Import state
  loading = false;
  error: string | null = null;
  
  // Import results
  importResult: ImportResponse | null = null;
  showResults = false;

  constructor(
    private inventoryService: InventoryAnalyticsService,
    private authService: AuthService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.checkPermissions();
  }

  checkPermissions(): void {
    const user = this.authService.getCurrentUser();
    this.canAccess = user?.user_type === 'manager' || user?.user_type === 'admin';
  }

  onCancel(): void {
    if (this.loading) return;
    this.resetModal();
    this.closeModal.emit();
  }

  resetModal(): void {
    this.selectedFile = null;
    this.importResult = null;
    this.showResults = false;
    this.error = null;
    this.loading = false;
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

  // Download Template (Frontend Only)
  downloadTemplate(): void {
    // Create CSV template content
    const headers = [
      'Part Number',
      'Part Name',
      'Description',
      'Unit of Measure',
      'Unit Cost',
      'Category ID',
      'Reorder Point',
      'Reorder Quantity',
      'Barcode',
      'Status',
      'ABC Class'
    ];

    const sampleRow = [
      'PART-001',
      'Sample Part',
      'Sample description',
      'PCS',
      '10.00',
      '',
      '10',
      '20',
      '',
      'active',
      'A'
    ];

    const csvContent = [
      headers.join(','),
      sampleRow.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','),
      '' // Empty row for clarity
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `parts-import-template-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    this.toastService.success('Template downloaded successfully');
  }

  // File Upload Handlers
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFile(input.files[0]);
    }
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFile(files[0]);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  handleFile(file: File): void {
    // Validate file type
    const validTypes = [
      'text/csv',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel.sheet.macroEnabled.12'
    ];
    
    const isValidType = validTypes.includes(file.type) || 
                       file.name.endsWith('.csv') || 
                       file.name.endsWith('.xlsx') || 
                       file.name.endsWith('.xls');

    if (!isValidType) {
      this.toastService.error('Please upload a CSV or XLSX file');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      this.toastService.error('File size must be less than 10MB');
      return;
    }

    // Validate file is a proper File object
    if (!(file instanceof File)) {
      this.toastService.error('Invalid file object');
      return;
    }

    this.selectedFile = file;
    this.error = null;
    this.importResult = null;
    this.showResults = false;
  }

  // Import Parts
  importParts(): void {
    if (!this.selectedFile) {
      this.toastService.error('Please select a file first');
      return;
    }

    // Validate file exists and is valid
    if (!(this.selectedFile instanceof File)) {
      this.toastService.error('Invalid file selected');
      return;
    }

    this.loading = true;
    this.error = null;
    this.showResults = false;

    // Create FormData - ensure field name is exactly 'file'
    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);

    // Debug: Log FormData contents
    console.log('FormData contents:');
    console.log('File:', this.selectedFile);
    console.log('File name:', this.selectedFile.name);
    console.log('File size:', this.selectedFile.size);
    console.log('File type:', this.selectedFile.type);

    // Call single import API
    this.inventoryService.importParts(formData).subscribe({
      next: (response: ImportResponse) => {
        this.loading = false;
        this.importResult = response;
        this.showResults = true;

        if (response.success) {
          const data = response.data;
          if (data) {
            const totalImported = data.imported_count || 0;
            const failedCount = data.failed_count || 0;
            
            if (totalImported > 0) {
              if (failedCount > 0) {
                this.toastService.warning(`Import completed with errors — ${totalImported} imported, ${failedCount} failed`);
              } else {
                this.toastService.success(`Parts imported successfully — ${totalImported} rows imported`);
              }
            } else {
              if (failedCount > 0) {
                this.toastService.error(`No valid rows to import — ${failedCount} rows failed`);
              } else {
                this.toastService.error('No valid rows to import');
              }
            }
          }

          // Track import event
          this.trackImportEvent(data);
          
          // Reset modal after delay to allow user to see success message
          setTimeout(() => {
            this.resetModal();
            this.importComplete.emit();
          }, 2000);
        } else {
          this.error = response.message || 'Import failed';
          this.toastService.error(this.error);
        }
      },
      error: (err) => {
        this.loading = false;
        
        // Parse backend error response
        if (err.error) {
          const errorMessage = err.error.message || 'Failed to import parts';
          this.error = errorMessage;
          
          // Check for field-specific errors
          if (err.error.errors && err.error.errors.file) {
            const fileError = Array.isArray(err.error.errors.file) ? err.error.errors.file[0] : err.error.errors.file;
            this.error = `File Error: ${fileError}`;
            this.toastService.error(`File Error: ${fileError}`);
          } else {
            this.toastService.error(errorMessage);
          }
        } else {
          const errorMessage = 'Failed to import parts';
          this.error = errorMessage;
          this.toastService.error(errorMessage);
        }
      }
    });
  }

  downloadErrorReport(): void {
    if (!this.importResult?.data?.error_report_url) {
      this.toastService.warning('No error report available');
      return;
    }

    const errorReportUrl = this.importResult.data.error_report_url;
    if (!errorReportUrl || typeof errorReportUrl !== 'string') {
      this.toastService.warning('No error report available');
      return;
    }

    // Download from URL
    const link = document.createElement('a');
    link.href = errorReportUrl;
    link.download = `parts-import-errors-${new Date().toISOString().slice(0, 19)}.csv`;
    link.click();
    this.toastService.success('Error report downloaded');
  }

  trackImportEvent(data: any): void {
    // Track bulk import event for analytics
    if (typeof window !== 'undefined' && (window as any).gtag && data) {
      (window as any).gtag('event', 'parts_bulk_import', {
        imported_count: data.imported_count || 0,
        created_count: data.created_count || 0,
        updated_count: data.updated_count || 0,
        failed_count: data.failed_count || 0
      });
    }
  }

  getInvalidRows(): Array<{ row_number: number; errors: string[]; data?: Record<string, any> }> {
    return this.importResult?.data?.invalid_rows || [];
  }

  getErrorMessages(row: { row_number: number; errors: string[] }): string {
    return row.errors.join('; ');
  }

  getTotalRows(): number {
    if (!this.importResult?.data) return 0;
    const imported = this.importResult.data.imported_count || 0;
    const failed = this.importResult.data.failed_count || 0;
    return imported + failed;
  }
}