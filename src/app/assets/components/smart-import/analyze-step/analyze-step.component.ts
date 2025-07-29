import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetImportService } from '../../../services/asset-import.service';

@Component({
  selector: 'app-analyze-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analyze-step.component.html',
  styleUrls: ['./analyze-step.component.scss']
})
export class AnalyzeStepComponent implements OnInit {
  @Input() fileId: string | null = null;
  @Input() file: File | null = null;
  @Output() analysisComplete = new EventEmitter<any>();

  isAnalyzing = false;
  analysisProgress = 0;
  analysis: any = null;
  errors: string[] = [];

  constructor(private assetImportService: AssetImportService) {}

  ngOnInit(): void {
    if (this.fileId) {
      this.analyzeSpreadsheet();
    }
  }

  private analyzeSpreadsheet(): void {
    if (!this.fileId) return;

    this.isAnalyzing = true;
    this.analysisProgress = 0;

    // Simulate analysis progress
    const progressInterval = setInterval(() => {
      this.analysisProgress += Math.random() * 15;
      if (this.analysisProgress >= 100) {
        this.analysisProgress = 100;
        clearInterval(progressInterval);
      }
    }, 300);

    this.assetImportService.analyzeSpreadsheet(this.fileId).subscribe({
      next: (response) => {
        clearInterval(progressInterval);
        this.analysisProgress = 100;
        this.isAnalyzing = false;
        
        this.analysis = response.data;
        this.analysisComplete.emit(this.analysis);
      },
      error: (error) => {
        clearInterval(progressInterval);
        this.isAnalyzing = false;
        this.errors = ['Analysis failed. Please try again.'];
        console.error('Analysis error:', error);
      }
    });
  }

  getRequiredFieldsStatus(): { missing: string[], present: string[] } {
    if (!this.analysis?.detected_fields) {
      return { missing: [], present: [] };
    }

    const requiredFields = ['Asset Name', 'Asset ID', 'Category', 'Location'];
    const detectedFields = this.analysis.detected_fields.map((field: any) => field.name);
    
    const missing = requiredFields.filter(field => 
      !detectedFields.some((detected: string) => 
        detected.toLowerCase().includes(field.toLowerCase())
      )
    );
    
    const present = requiredFields.filter(field => 
      detectedFields.some((detected: string) => 
        detected.toLowerCase().includes(field.toLowerCase())
      )
    );

    return { missing, present };
  }

  getFieldConfidenceClass(confidence: string): string {
    switch (confidence.toLowerCase()) {
      case 'high':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
} 