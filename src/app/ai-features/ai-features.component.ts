import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AIImageUploadService } from './shared/ai-image-upload.service';
import { RecognitionResult } from './shared/ai-recognition-result.interface';
import { LocationService, Location } from '../locations/services/location.service';
import { AIAnalyticsService, AnalyticsResult, AssetContext } from './shared/ai-analytics.service';
import { AIImageAnalysisService, TaskAnalysisResult } from './shared/ai-image-analysis.service';

@Component({
  selector: 'app-ai-features',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-features.component.html',
  styleUrls: ['./ai-features.component.scss']
})
export class AIFeaturesComponent implements OnInit, OnDestroy {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  activeTab: string = 'image-recognition';
  selectedFiles: File[] = [];
  filePreviews: { [key: string]: string } = {};
  errorMessage: string = '';
  analysisResult: RecognitionResult | null = null;
  isAnalyzing: boolean = false;
  
  // Feedback properties
  feedbackSubmitted: boolean = false;
  feedbackType: 'accurate' | 'needs_correction' | null = null;
  correctionText: string = '';
  isSubmittingFeedback: boolean = false;
  corrections: Array<{field: string, value: string}> = [];
  
  // Asset creation properties
  showCreateAssetModal: boolean = false;
  isCreatingAsset: boolean = false;
  assetForm = {
    name: '',
    model: '',
    description: '',
    manufacturer: '',
    serialNumber: '',
    location: ''
  };

  // Location properties
  private destroy$ = new Subject<void>();
  locations: Location[] = [];
  loadingLocations: boolean = false;

  // AI Analytics properties
  analyticsResult: AnalyticsResult | null = null;
  isAnalyzingAssets: boolean = false;
  selectedAssets: AssetContext[] = [];
  analyticsImages: string[] = [];
  analyticsFilePreviews: { [key: string]: string } = {};

  tabs = [
    { id: 'image-recognition', label: 'Image Recognition', icon: 'camera' },
    { id: 'predictive-maintenance', label: 'Predictive Maintenance', icon: 'trending-up' },
    { id: 'natural-language', label: 'Natural Language', icon: 'message-circle' },
    { id: 'recommendations', label: 'Recommendations', icon: 'lightbulb' },
    { id: 'ai-analytics', label: 'AI Analytics', icon: 'bar-chart' }
  ];

  assetTypes = [
    { name: 'HVAC Units', icon: 'hvac' },
    { name: 'Generators', icon: 'generator' },
    { name: 'Pumps', icon: 'pump' },
    { name: 'Conveyor Systems', icon: 'conveyor' },
    { name: 'Vehicles', icon: 'vehicle' },
    { name: 'Machinery', icon: 'machinery' },
    { name: 'Electrical Panels', icon: 'electrical' },
    { name: 'Safety Equipment', icon: 'safety' }
  ];

  constructor(
    private aiImageUploadService: AIImageUploadService,
    private locationService: LocationService,
    private aiAnalyticsService: AIAnalyticsService,
    private aiImageAnalysisService: AIImageAnalysisService
  ) {}

  ngOnInit() {
    this.loadLocations();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }

  getTabIcon(iconName: string): string {
    const icons: { [key: string]: string } = {
      'camera': 'M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2M12 4V6H12V4M12 8C10.9 8 10 8.9 10 10S10.9 12 12 12S14 11.1 14 10S13.1 8 12 8M12 14C10.9 14 10 14.9 10 16S10.9 18 12 18S14 17.1 14 16S13.1 14 12 14Z',
      'trending-up': 'M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z',
      'message-circle': 'M12 2C6.48 2 2 6.48 2 12C2 13.54 2.36 14.99 3 16.29L2 22L7.71 21C9.01 21.64 10.46 22 12 22C17.52 22 22 17.52 22 12S17.52 2 12 2M12 4C16.41 4 20 7.59 20 12S16.41 20 12 20C10.74 20 9.57 19.72 8.5 19.24L8 19L4 20L5 16L4.76 15.5C4.28 14.43 4 13.26 4 12C4 7.59 7.59 4 12 4M8 9V11H16V9H8M8 13V15H14V13H8Z',
      'lightbulb': 'M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2M9 21C9 21.55 9.45 22 10 22H14C14.55 22 15 21.55 15 21V20H9V21Z',
      'bar-chart': 'M22 21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z'
    };
    return icons[iconName] || icons['camera'];
  }

  getAssetTypeIcon(iconName: string): string {
    const icons: { [key: string]: string } = {
      'hvac': 'M12 2L2 7L12 12L22 7L12 2Z',
      'generator': 'M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2Z',
      'pump': 'M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2Z',
      'conveyor': 'M2 12H22M2 12L6 8M2 12L6 16M22 12L18 8M22 12L18 16',
      'vehicle': 'M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2Z',
      'machinery': 'M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2Z',
      'electrical': 'M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2Z',
      'safety': 'M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2Z'
    };
    return icons[iconName] || icons['hvac'];
  }

  // File handling methods
  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const files = Array.from(event.target.files) as File[];
    this.addFiles(files);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    const files = Array.from(event.dataTransfer?.files || []);
    this.addFiles(files);
  }

  addFiles(files: File[]) {
    this.errorMessage = '';

    // Only take the first file
    const file = files[0];
    if (!file) return;

    // Validate file
    const validation = this.aiImageUploadService.validate(file);
    if (!validation.ok) {
      this.errorMessage = validation.reason || 'Invalid file';
      return;
    }

    // Clear existing files and add new one
    this.selectedFiles = [file];
    this.filePreviews = {};
    this.generateFilePreview(file);
  }

  generateFilePreview(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.filePreviews[file.name] = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  getFilePreview(file: File): string {
    return this.filePreviews[file.name] || '';
  }

  removeFile(index: number) {
    this.selectedFiles = [];
    this.filePreviews = {};
    this.errorMessage = '';
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  async analyzeImages() {
    if (this.selectedFiles.length === 0) {
      this.errorMessage = 'Please select at least one image';
      return;
    }

    this.isAnalyzing = true;
    this.errorMessage = '';
    this.analysisResult = null;
    this.feedbackSubmitted = false;
    this.feedbackType = null;
    this.correctionText = '';
    this.corrections = [];

    try {
      // Convert files to data URLs
      const dataUrls: string[] = [];
      for (const file of this.selectedFiles) {
        const dataUrl = await this.aiImageUploadService.toDataUrl(file);
        dataUrls.push(dataUrl);
      }

      // Convert data URLs to clean base64 for image recognition API
      const cleanImages = dataUrls.map(img => {
        if (img.startsWith('data:image/')) {
          return img.split(',')[1] || img;
        }
        return img;
      });

      // Use AI Image Recognition Service
      this.aiImageUploadService.analyze(cleanImages).subscribe({
        next: (response) => {
          if (response.success) {
            this.analysisResult = response.data;
          } else {
            this.errorMessage = 'Analysis failed. Please try again.';
          }
          this.isAnalyzing = false;
        },
        error: (error) => {
          this.errorMessage = error?.error?.message || 'Analysis failed. Please try again.';
          this.isAnalyzing = false;
        }
      });
    } catch (error) {
      console.log(error)
      this.errorMessage = 'Failed to process images. Please try again.';
      this.isAnalyzing = false;
    }
  }

  // Feedback methods
  selectFeedback(type: 'accurate' | 'needs_correction') {
    this.feedbackType = type;
  }

  submitFeedback() {
    if (!this.feedbackType) return;

    // Validate corrections if needs correction is selected
    if (this.feedbackType === 'needs_correction' && this.corrections.length === 0) {
      return;
    }

    this.isSubmittingFeedback = true;

    // Use AI Image Analysis Service for feedback
    this.aiImageAnalysisService.submitFeedback(
      this.analysisResult?.id || 0, // Assuming we have an ID
      this.feedbackType,
      this.corrections.map(c => c.value) // Extract value from correction objects
    ).subscribe({
      next: (response) => {
        if (response.success) {
          this.feedbackSubmitted = true;
          this.errorMessage = '';
        } else {
          this.errorMessage = response.message || 'Failed to submit feedback';
        }
        this.isSubmittingFeedback = false;
        
        // Reset after 3 seconds
        setTimeout(() => {
          this.feedbackSubmitted = false;
          this.feedbackType = null;
          this.correctionText = '';
          this.corrections = [];
        }, 3000);
      },
      error: (error) => {
        this.errorMessage = error?.error?.message || 'Failed to submit feedback';
        this.isSubmittingFeedback = false;
      }
    });
  }

  cancelFeedback() {
    this.feedbackType = null;
    this.correctionText = '';
    this.corrections = [];
  }

  addCorrection() {
    this.corrections.push({field: '', value: ''});
  }

  removeCorrection(index: number) {
    this.corrections.splice(index, 1);
  }

  updateCorrection(index: number, field: 'field' | 'value', value: string) {
    this.corrections[index][field] = value;
  }

  getConfidenceClass(confidence: number): string {
    if (confidence >= 80) return 'confidence-high';
    if (confidence >= 60) return 'confidence-medium';
    return 'confidence-low';
  }

  getConfidenceLabel(confidence: number): string {
    if (confidence >= 80) return 'High';
    if (confidence >= 60) return 'Medium';
    return 'Low';
  }

  getConditionClass(condition: string): string {
    return condition.toLowerCase();
  }

  // Location methods
  loadLocations() {
    this.loadingLocations = true;
    
    this.locationService.getLocations({
      per_page: 1000, // Get all locations
      page: 1
    })
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
        if (response.success) {
          this.locations = response.data.locations;
          // Sort locations by name on the client side
          this.locations.sort((a, b) => a.name.localeCompare(b.name));
        }
        this.loadingLocations = false;
      },
      error: (error) => {
        console.error('Error loading locations:', error);
        this.loadingLocations = false;
      }
    });
  }

  // Asset creation methods
  openCreateAssetModal() {
    if (this.analysisResult) {
      // Pre-fill form with AI recognition data
      this.assetForm = {
        name: this.analysisResult.assetType || '',
        model: this.analysisResult.model || '',
        description: `AI-identified ${this.analysisResult.assetType} in ${this.analysisResult.condition.toLowerCase()} condition`,
        manufacturer: this.analysisResult.manufacturer || '',
        serialNumber: this.analysisResult.serialNumber || '',
        location: ''
      };
    }
    this.showCreateAssetModal = true;
  }

  closeCreateAssetModal() {
    this.showCreateAssetModal = false;
    this.assetForm = {
      name: '',
      model: '',
      description: '',
      manufacturer: '',
      serialNumber: '',
      location: ''
    };
  }

  createAsset() {
    if (!this.assetForm.name.trim()) {
      this.errorMessage = 'Asset name is required';
      return;
    }

    this.isCreatingAsset = true;

    // Simulate API call (replace with actual asset creation)
    setTimeout(() => {
      this.isCreatingAsset = false;
      this.showCreateAssetModal = false;
      this.analysisResult = null; // Clear results after creating asset
      this.selectedFiles = [];
      this.filePreviews = {};
      
      // Show success message
      this.errorMessage = '';
      // You could add a success notification here
    }, 1500);
  }

  // AI Analytics methods
  addSampleAssets() {
    this.selectedAssets = [
      {
        id: 1,
        name: 'HVAC Unit A',
        type: 'HVAC',
        manufacturer: 'Carrier',
        model: 'Model 123',
        age: 5,
        condition: 'Good',
        lastMaintenance: '2024-01-15',
        nextMaintenance: '2024-07-15',
        value: 25000,
        location: 'Building A - Floor 2',
        status: 'Active'
      },
      {
        id: 2,
        name: 'Generator B',
        type: 'Generator',
        manufacturer: 'Cummins',
        model: 'C150D5',
        age: 8,
        condition: 'Fair',
        lastMaintenance: '2023-12-01',
        nextMaintenance: '2024-06-01',
        value: 45000,
        location: 'Building B - Basement',
        status: 'Active'
      },
      {
        id: 3,
        name: 'Water Pump C',
        type: 'Pump',
        manufacturer: 'Grundfos',
        model: 'CR 15-4',
        age: 12,
        condition: 'Poor',
        lastMaintenance: '2023-08-15',
        nextMaintenance: '2024-02-15',
        value: 8500,
        location: 'Building A - Mechanical Room',
        status: 'Active'
      }
    ];
  }

  clearSelectedAssets() {
    this.selectedAssets = [];
    this.analyticsImages = [];
    this.analyticsResult = null;
  }

  async analyzeAssets() {
    if (this.selectedAssets.length === 0) {
      this.errorMessage = 'Please select at least one asset for analysis';
      return;
    }

    this.isAnalyzingAssets = true;
    this.errorMessage = '';
    this.analyticsResult = null;

    try {
      // Convert images to clean base64 format for backend
      const cleanImages = this.analyticsImages.map(img => {
        if (img.startsWith('data:image/')) {
          // Extract base64 part from data URL
          return img.split(',')[1] || img;
        }
        return img; // Already clean base64
      });

      this.aiAnalyticsService.analyzeAssets(this.selectedAssets, cleanImages)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            if (response.success) {
              this.analyticsResult = response.data;
            } else {
              this.errorMessage = response.message || 'Analysis failed. Please try again.';
            }
            this.isAnalyzingAssets = false;
          },
          error: (error) => {
            console.error('Analytics error:', error);
            this.errorMessage = error?.error?.message || 'Asset analysis failed. Please try again.';
            this.isAnalyzingAssets = false;
          }
        });
    } catch (error) {
      console.error('Analytics error:', error);
      this.errorMessage = 'Failed to analyze assets. Please try again.';
      this.isAnalyzingAssets = false;
    }
  }

  getHealthScoreClass(score: number): string {
    if (score >= 80) return 'health-excellent';
    if (score >= 60) return 'health-good';
    if (score >= 40) return 'health-fair';
    return 'health-poor';
  }

  getRiskLevelClass(level: string): string {
    return `risk-${level}`;
  }

  getImpactClass(impact: string): string {
    return `impact-${impact.toLowerCase()}`;
  }

  // Analytics image upload methods
  async onAnalyticsFileSelected(event: any) {
    const files = Array.from(event.target.files) as File[];
    if (files.length === 0) return;

    // Limit to 5 images total
    const remainingSlots = 5 - this.analyticsImages.length;
    const filesToProcess = files.slice(0, remainingSlots);

    for (const file of filesToProcess) {
      try {
        const dataUrl = await this.aiImageUploadService.toDataUrl(file);
        this.analyticsImages.push(dataUrl);
        this.analyticsFilePreviews[file.name] = dataUrl;
      } catch (error) {
        console.error('Error processing file:', error);
        this.errorMessage = 'Error processing image. Please try again.';
      }
    }

    // Reset file input
    event.target.value = '';
  }

  removeAnalyticsImage(index: number) {
    this.analyticsImages.splice(index, 1);
    // Remove from previews
    const keys = Object.keys(this.analyticsFilePreviews);
    if (keys[index]) {
      delete this.analyticsFilePreviews[keys[index]];
    }
  }

  clearAnalyticsImages() {
    this.analyticsImages = [];
    this.analyticsFilePreviews = {};
  }

  // Convert AnalyticsResult to RecognitionResult for image analysis compatibility
  private convertAnalyticsToRecognition(analytics: AnalyticsResult): RecognitionResult {
    // Extract asset information from risk assets if available
    const firstRiskAsset = analytics.riskAssets.length > 0 ? analytics.riskAssets[0] : null;
    
    // Convert health score to condition
    let condition: 'Excellent' | 'Good' | 'Fair' | 'Poor' = 'Fair';
    if (analytics.healthScore >= 80) condition = 'Excellent';
    else if (analytics.healthScore >= 60) condition = 'Good';
    else if (analytics.healthScore >= 40) condition = 'Fair';
    else condition = 'Poor';

    // Extract recommendations from insights
    const recommendations = analytics.insights.map(insight => insight.action);

    return {
      assetType: firstRiskAsset?.name || 'Asset',
      confidence: Math.round(analytics.healthScore),
      manufacturer: null,
      model: null,
      serialNumber: null,
      assetTag: null,
      condition: condition,
      recommendations: recommendations,
      evidence: {
        fieldsFound: ['assetType', 'condition', 'recommendations'],
        imagesUsed: 1,
        notes: `Health Score: ${analytics.healthScore}%`
      }
    };
  }

  // AI Image Analyzer event handlers
  onAIAnalysisComplete(result: TaskAnalysisResult): void {
    console.log('AI Analysis Complete:', result);
    // You can add additional logic here if needed
  }

  onAIFieldUpdate(fieldUpdate: { field: string, value: any }): void {
    console.log('Field Update:', fieldUpdate);
    // You can add real-time form updates here
  }

  onImageUploaded(file: File): void {
    console.log('Image Uploaded:', file);
    // You can add additional logic here if needed
  }

  // Load analysis history
  loadAnalysisHistory() {
    this.aiImageAnalysisService.getAnalysisHistory(1, 10).subscribe({
      next: (response) => {
        if (response.success) {
          console.log('Analysis History:', response.data);
          // You can display history in a modal or separate section
        } else {
          console.error('Failed to load history:', response.message);
        }
      },
      error: (error) => {
        console.error('Error loading history:', error);
      }
    });
  }
}
