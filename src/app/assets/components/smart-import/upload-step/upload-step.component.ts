import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetImportService } from '../../../services/asset-import.service';

@Component({
  selector: 'app-upload-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-step.component.html',
  styleUrls: ['./upload-step.component.scss']
})
export class UploadStepComponent {
  @Output() fileUploaded = new EventEmitter<any>();

  isDragOver = false;
  isUploading = false;
  uploadProgress = 0;
  selectedFile: File | null = null;
  validationErrors: string[] = [];

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
      if (this.uploadProgress >= 100) {
        this.uploadProgress = 100;
        clearInterval(progressInterval);
      }
    }, 200);

    this.assetImportService.uploadFile(file).subscribe({
      next: (response) => {
        clearInterval(progressInterval);
        this.uploadProgress = 100;
        this.isUploading = false;
        
        this.fileUploaded.emit({
          fileId: response.data.file_id,
          file: file
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
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
} 