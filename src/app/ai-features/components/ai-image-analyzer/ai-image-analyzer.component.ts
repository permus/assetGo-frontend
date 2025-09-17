import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AIImageAnalysisService, TaskAnalysisResult } from '../../shared/ai-image-analysis.service';

@Component({
  selector: 'app-ai-image-analyzer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-image-analyzer.component.html',
  styleUrls: ['./ai-image-analyzer.component.scss']
})
export class AiImageAnalyzerComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  
  @Output() analysisComplete = new EventEmitter<TaskAnalysisResult>();
  @Output() analysisStarted = new EventEmitter<void>();
  @Output() fieldUpdate = new EventEmitter<{field: string, value: any}>();
  @Output() imageUploaded = new EventEmitter<any>();

  selectedFile: File | null = null;
  isAnalyzing = false;
  analysisResult: TaskAnalysisResult | null = null;
  errorMessage = '';
  dragOver = false;

  constructor(private aiService: AIImageAnalysisService) {}

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.dragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.dragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.dragOver = false;
    
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFile(files[0]);
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFile(input.files[0]);
    }
  }

  private handleFile(file: File): void {
    const validation = this.aiService.validateFile(file);
    if (!validation.valid) {
      this.errorMessage = validation.error || 'Invalid file';
      return;
    }

    this.selectedFile = file;
    this.errorMessage = '';
    this.analysisResult = null;
    this.imageUploaded.emit(file);
  }

  async analyzeImage(): Promise<void> {
    if (!this.selectedFile) {
      this.errorMessage = 'Please select an image first';
      return;
    }

    this.isAnalyzing = true;
    this.errorMessage = '';
    this.analysisStarted.emit();

    try {
      const base64Image = await this.aiService.fileToBase64(this.selectedFile);
      
      this.aiService.analyzeImageForTask(base64Image).subscribe({
        next: (response) => {
          if (response.success && response.data) {
            // Convert RecognitionResult to TaskAnalysisResult format
            this.analysisResult = this.convertToTaskAnalysisResult(response.data);
            this.analysisComplete.emit(this.analysisResult);
            this.autoFillFormFields(this.analysisResult);
          } else {
            this.errorMessage = response.message || 'Analysis failed. Please try again.';
          }
          this.isAnalyzing = false;
        },
        error: (error) => {
          this.errorMessage = error?.error?.message || 'Analysis failed. Please try again.';
          this.isAnalyzing = false;
        }
      });
    } catch (error) {
      this.errorMessage = 'Failed to process image. Please try again.';
      this.isAnalyzing = false;
    }
  }

  private autoFillFormFields(result: TaskAnalysisResult): void {
    // Emit field updates for real-time form population
    this.fieldUpdate.emit({ field: 'title', value: result.title });
    this.fieldUpdate.emit({ field: 'description', value: result.description });
    this.fieldUpdate.emit({ field: 'category', value: result.category });
    this.fieldUpdate.emit({ field: 'priority', value: result.priority });
    this.fieldUpdate.emit({ field: 'notes', value: result.notes });
  }

  clearImage(): void {
    this.selectedFile = null;
    this.analysisResult = null;
    this.errorMessage = '';
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  getPriorityLabel(priority: number): string {
    const labels = ['', 'Low', 'Medium', 'High', 'Urgent', 'Critical'];
    return labels[priority] || 'Unknown';
  }

  private convertToTaskAnalysisResult(recognitionData: any): TaskAnalysisResult {
    // Convert RecognitionResult format to TaskAnalysisResult format
    return {
      title: recognitionData.assetType || 'Asset Analysis',
      description: recognitionData.recommendations?.join('. ') || 'Asset analysis completed',
      priority: this.getPriorityFromConfidence(recognitionData.confidence),
      category: recognitionData.assetType || 'Equipment',
      notes: recognitionData.evidence?.notes || 'AI analysis completed',
      subtasks: recognitionData.recommendations || []
    };
  }

  private getPriorityFromConfidence(confidence: number): number {
    if (confidence >= 90) return 1; // Low priority for high confidence
    if (confidence >= 70) return 2; // Medium priority
    if (confidence >= 50) return 3; // High priority
    if (confidence >= 30) return 4; // Urgent
    return 5; // Critical for low confidence
  }
}
