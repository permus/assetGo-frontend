import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetImportService, ImportSession } from '../../../services/asset-import.service';

@Component({
  selector: 'app-upload-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-step.component.html',
  styleUrls: ['./upload-step.component.scss']
})
export class UploadStepComponent {
  @Output() fileUploaded = new EventEmitter<{ fileId: string; file: File; session: ImportSession }>();

  isDragOver = false;
  isUploading = false;
  uploadProgress = 0;
  selectedFile: File | null = null;
  validationErrors: string[] = [];
  uploadSession: ImportSession | null = null;

  constructor(private assetImportService: AssetImportService) {}

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFile(files[0]);
    }
  }

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
      this.handleFile(files[0]);
    }
  }

  private handleFile(file: File): void {
    this.selectedFile = file;
    this.validationErrors = [];
    this.uploadSession = null;

    // Validate file
    const validation = this.assetImportService.validateFile(file);
    if (!validation.isValid) {
      this.validationErrors = validation.errors;
      return;
    }

    // Upload file
    this.uploadFile(file);
  }

  private uploadFile(file: File): void {
    this.isUploading = true;
    this.uploadProgress = 0;

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      this.uploadProgress += Math.random() * 20;
      if (this.uploadProgress >= 90) {
        this.uploadProgress = 90;
        clearInterval(progressInterval);
      }
    }, 200);

    this.assetImportService.uploadFile(file).subscribe({
      next: (response) => {
        clearInterval(progressInterval);
        this.uploadProgress = 100;
        this.isUploading = false;

        this.uploadSession = response.data;

        this.fileUploaded.emit({
          fileId: response.data.file_id,
          file: file,
          session: response.data
        });
      },
      error: (error) => {
        clearInterval(progressInterval);
        this.isUploading = false;
        this.validationErrors = ['Upload failed. Please try again.'];
        console.error('Upload error:', error);
      }
    });
  }

  downloadTemplate(): void {
    this.assetImportService.downloadTemplate().subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'asset-import-template.xlsx';
        link.click();
        window.URL.revokeObjectURL(url);
      },
      error: (error) => {
        console.error('Template download error:', error);
        // Fallback to public assets template
        this.assetImportService.downloadTemplateFromAssets();
      }
    });
  }

  formatFileSize(bytes: number): string {
    return this.assetImportService.formatFileSize(bytes);
  }

  clearSelection(): void {
    this.selectedFile = null;
    this.validationErrors = [];
    this.uploadSession = null;
    this.uploadProgress = 0;
  }
}
