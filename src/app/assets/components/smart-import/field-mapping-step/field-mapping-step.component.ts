import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AssetImportService, FieldMapping } from '../../../services/asset-import.service';

@Component({
  selector: 'app-field-mapping-step',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './field-mapping-step.component.html',
  styleUrls: ['./field-mapping-step.component.scss']
})
export class FieldMappingStepComponent implements OnInit {
  @Input() fileId: string | null = null;
  @Input() analysis: any = null;
  @Output() mappingComplete = new EventEmitter<any>();

  systemFields: any[] = [];
  fieldMappings: FieldMapping[] = [];
  isMappingLoading = false;
  showPreview = false;
  previewData: any[] = [];

  constructor(private assetImportService: AssetImportService) {}

  ngOnInit(): void {
    if (this.fileId) {
      this.loadFieldMappings();
      this.loadSystemFields();
    }
  }

  private loadFieldMappings(): void {
    if (!this.fileId) return;

    this.isMappingLoading = true;
    this.assetImportService.getFieldMappings(this.fileId).subscribe({
      next: (response) => {
        this.isMappingLoading = false;
        this.fieldMappings = response.data.mappings || [];
        this.autoMapFields();
      },
      error: (error) => {
        this.isMappingLoading = false;
        console.error('Error loading field mappings:', error);
        this.autoMapFields();
      }
    });
  }

  private loadSystemFields(): void {
    this.assetImportService.getSystemFields().subscribe({
      next: (response) => {
        this.systemFields = response.data.fields || [];
      },
      error: (error) => {
        console.error('Error loading system fields:', error);
      }
    });
  }

  private autoMapFields(): void {
    if (!this.analysis?.detected_fields) return;

    this.fieldMappings = this.analysis.detected_fields.map((field: any) => {
      const existingMapping = this.fieldMappings.find(m => m.columnName === field.name);
      if (existingMapping) return existingMapping;

      // Auto-map based on field name similarity
      const systemField = this.findBestMatch(field.name);
      
      return {
        columnName: field.name,
        systemField: systemField?.name || '',
        confidence: this.calculateConfidence(field.name, systemField),
        confidenceReason: this.getConfidenceReason(field.name, systemField),
        isRequired: this.isRequiredField(systemField?.name),
        isMapped: !!systemField
      };
    });
  }

  private findBestMatch(columnName: string): any {
    const normalizedColumn = columnName.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Exact matches
    const exactMatch = this.systemFields.find(field => 
      field.name.toLowerCase().replace(/[^a-z0-9]/g, '') === normalizedColumn
    );
    if (exactMatch) return exactMatch;

    // Partial matches
    const partialMatches = this.systemFields.filter(field => 
      field.name.toLowerCase().includes(normalizedColumn) || 
      normalizedColumn.includes(field.name.toLowerCase())
    );
    
    return partialMatches.length > 0 ? partialMatches[0] : null;
  }

  private calculateConfidence(columnName: string, systemField: any): 'High' | 'Medium' | 'Low' {
    if (!systemField) return 'Low';
    
    const normalizedColumn = columnName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const normalizedField = systemField.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    if (normalizedColumn === normalizedField) return 'High';
    if (normalizedColumn.includes(normalizedField) || normalizedField.includes(normalizedColumn)) return 'Medium';
    return 'Low';
  }

  private getConfidenceReason(columnName: string, systemField: any): string {
    if (!systemField) return 'No match found';
    
    const normalizedColumn = columnName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const normalizedField = systemField.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    if (normalizedColumn === normalizedField) return `Exact match with '${systemField.name}'`;
    if (normalizedColumn.includes(normalizedField)) return `Contains keyword '${systemField.name}'`;
    if (normalizedField.includes(normalizedColumn)) return `Similar to '${systemField.name}'`;
    return 'Partial match';
  }

  private isRequiredField(fieldName: string): boolean {
    const requiredFields = ['Asset Name', 'Asset ID', 'Category', 'Location'];
    return requiredFields.includes(fieldName);
  }

  autoMap(): void {
    this.autoMapFields();
  }

  clearAll(): void {
    this.fieldMappings.forEach(mapping => {
      mapping.systemField = '';
      mapping.isMapped = false;
    });
  }

  onFieldMappingChange(mapping: FieldMapping): void {
    mapping.isMapped = !!mapping.systemField;
  }

  getMappedFieldsCount(): number {
    return this.fieldMappings.filter(m => m.isMapped).length;
  }

  getAutoDetectedCount(): number {
    return this.fieldMappings.filter(m => m.confidence === 'High').length;
  }

  getConfidenceClass(confidence: string): string {
    switch (confidence) {
      case 'High':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  showDataPreview(): void {
    this.showPreview = !this.showPreview;
    // In a real implementation, you would fetch preview data from the backend
    this.previewData = this.analysis?.preview_data || [];
  }

  saveMappings(): void {
    if (!this.fileId) return;

    this.assetImportService.updateFieldMappings(this.fileId, this.fieldMappings).subscribe({
      next: (response) => {
        this.mappingComplete.emit({
          mappings: this.fieldMappings,
          success: true
        });
      },
      error: (error) => {
        console.error('Error saving mappings:', error);
      }
    });
  }
} 