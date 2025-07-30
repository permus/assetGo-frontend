import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetImportService, AnalysisResult } from '../../../services/asset-import.service';

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
  @Output() analysisComplete = new EventEmitter<AnalysisResult>();

  isAnalyzing = false;
  analysisProgress = 0;
  analysis: AnalysisResult | null = null;
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
      if (this.analysisProgress >= 90) {
        this.analysisProgress = 90;
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
    if (!this.analysis?.missing_required_fields) {
      return { missing: [], present: [] };
    }

    const requiredFields = ['Asset Name', 'Asset ID', 'Category', 'Location'];
    const detectedFields = this.analysis.headers || [];
    
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
    return this.assetImportService.getConfidenceClass(confidence);
  }

  getConfidencePercentage(confidence: string): number {
    switch (confidence.toLowerCase()) {
      case 'high':
        return 100;
      case 'medium':
        return 70;
      case 'low':
        return 30;
      default:
        return 0;
    }
  }

  getSampleDataCount(): number {
    if (!this.analysis?.sample) return 0;
    return Object.keys(this.analysis.sample).length;
  }

  getSampleDataEntries(): Array<{key: string, value: any}> {
    if (!this.analysis?.sample) return [];
    return Object.entries(this.analysis.sample).map(([key, value]) => ({ key, value }));
  }

  getMappingSuggestionsEntries(): Array<{columnName: string, systemField: string}> {
    if (!this.analysis?.mapping_suggestions) return [];
    return Object.entries(this.analysis.mapping_suggestions).map(([columnName, systemField]) => ({ 
      columnName, 
      systemField: systemField || 'Not mapped' 
    }));
  }

  getAnalysisConfidenceClass(): string {
    if (!this.analysis?.confidence) return 'bg-gray-100 text-gray-800';
    
    const confidence = this.analysis.confidence;
    switch (confidence) {
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