import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AssetImportService, FieldMapping, AnalysisResult } from '../../../services/asset-import.service';

@Component({
  selector: 'app-field-mapping-step',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './field-mapping-step.component.html',
  styleUrls: ['./field-mapping-step.component.scss']
})
export class FieldMappingStepComponent implements OnInit {
  @Input() fileId: string | null = null;
  @Input() analysis: AnalysisResult | null = null;
  @Output() mappingComplete = new EventEmitter<{ mappings: FieldMapping[], userOverrides: any }>();

  isLoading = false;
  isSaving = false;
  mappings: FieldMapping[] = [];
  userOverrides: any = {};
  systemFields: any[] = [];
  errors: string[] = [];

  constructor(private assetImportService: AssetImportService) {}

  ngOnInit(): void {
    if (this.fileId) {
      this.loadFieldMappings();
      this.loadSystemFields();
    }
  }

  private loadFieldMappings(): void {
    if (!this.fileId) return;

    this.isLoading = true;
    this.assetImportService.getFieldMappings(this.fileId).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.mappings = this.convertMappingSuggestionsToFieldMappings(response.data.mappings || {});
        this.userOverrides = response.data.user_overrides || {};
        
        // If no mappings exist, create them from analysis
        if (this.mappings.length === 0 && this.analysis) {
          this.mappings = this.convertMappingSuggestionsToFieldMappings(this.analysis.mapping_suggestions);
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errors = ['Failed to load field mappings. Please try again.'];
        console.error('Field mapping error:', error);
      }
    });
  }

  private loadSystemFields(): void {
    this.assetImportService.getSystemFields().subscribe({
      next: (response) => {
        // Convert string array to object array with value, label, and required properties
        this.systemFields = (response.data || []).map(field => ({
          value: field,
          label: this.getFieldLabel(field),
          required: this.isRequiredField(field)
        }));
      },
      error: (error) => {
        console.error('System fields error:', error);
        // Use default system fields if API fails
        this.systemFields = [
          { value: 'name', label: 'Asset Name', required: true },
          { value: 'asset_id', label: 'Asset ID', required: true },
          { value: 'serial_number', label: 'Serial Number', required: false },
          { value: 'category', label: 'Category', required: true },
          { value: 'type', label: 'Type', required: false },
          { value: 'location', label: 'Location', required: true },
          { value: 'department', label: 'Department', required: false },
          { value: 'status', label: 'Status', required: false },
          { value: 'purchase_date', label: 'Purchase Date', required: false },
          { value: 'purchase_price', label: 'Purchase Price', required: false },
          { value: 'description', label: 'Description', required: false },
          { value: 'tags', label: 'Tags', required: false }
        ];
      }
    });
  }

  private getFieldLabel(field: string): string {
    const labels: { [key: string]: string } = {
      'name': 'Asset Name',
      'asset_id': 'Asset ID',
      'serial_number': 'Serial Number',
      'category': 'Category',
      'type': 'Type',
      'location': 'Location',
      'department': 'Department',
      'status': 'Status',
      'purchase_date': 'Purchase Date',
      'purchase_price': 'Purchase Price',
      'description': 'Description',
      'tags': 'Tags',
      'model': 'Model',
      'manufacturer': 'Manufacturer'
    };
    return labels[field] || field.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  updateMapping(index: number, systemField: string): void {
    if (index >= 0 && index < this.mappings.length) {
      this.mappings[index].systemField = systemField;
      this.mappings[index].isMapped = systemField !== '';
    }
  }

  onMappingChange(index: number, event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.updateMapping(index, target.value);
  }

  private convertMappingSuggestionsToFieldMappings(mappingSuggestions: { [key: string]: string }): FieldMapping[] {
    const fieldMappings: FieldMapping[] = [];
    
    for (const [columnName, systemField] of Object.entries(mappingSuggestions)) {
      fieldMappings.push({
        columnName,
        systemField: systemField || '',
        confidence: this.getConfidenceLevel(systemField),
        confidenceReason: systemField ? 'Auto-detected' : 'No match found',
        isRequired: this.isRequiredField(systemField),
        isMapped: !!systemField
      });
    }
    
    return fieldMappings;
  }

  private getConfidenceLevel(systemField: string): 'High' | 'Medium' | 'Low' {
    if (!systemField) return 'Low';
    // Simple heuristic: high confidence for common fields, medium for others
    const highConfidenceFields = ['name', 'serial_number', 'location', 'category'];
    const mediumConfidenceFields = ['description', 'model', 'manufacturer', 'status'];
    
    if (highConfidenceFields.includes(systemField)) return 'High';
    if (mediumConfidenceFields.includes(systemField)) return 'Medium';
    return 'Low';
  }

  private isRequiredField(systemField: string): boolean {
    const requiredFields = ['name', 'location', 'category'];
    return requiredFields.includes(systemField);
  }

  toggleMapping(index: number): void {
    if (index >= 0 && index < this.mappings.length) {
      this.mappings[index].isMapped = !this.mappings[index].isMapped;
      if (!this.mappings[index].isMapped) {
        this.mappings[index].systemField = '';
      }
    }
  }

  saveMappings(): void {
    if (!this.fileId) return;

    this.isSaving = true;
    
    // Convert FieldMapping[] back to the format backend expects
    const backendMappings: { [key: string]: string } = {};
    this.mappings.forEach(mapping => {
      if (mapping.isMapped && mapping.systemField) {
        backendMappings[mapping.columnName] = mapping.systemField;
      }
    });

    this.assetImportService.saveFieldMappings(this.fileId, backendMappings, this.userOverrides).subscribe({
      next: (response) => {
        this.isSaving = false;
        // Convert response back to FieldMapping[] format for the component
        this.mappings = this.convertMappingSuggestionsToFieldMappings(response.data.mappings);
        this.userOverrides = response.data.user_overrides;
        this.mappingComplete.emit({
          mappings: this.mappings,
          userOverrides: this.userOverrides
        });
      },
      error: (error) => {
        this.isSaving = false;
        this.errors = ['Failed to save field mappings. Please try again.'];
        console.error('Save mapping error:', error);
      }
    });
  }

  getFieldConfidenceClass(confidence: string): string {
    return this.assetImportService.getConfidenceClass(confidence);
  }

  getRequiredFieldClass(isRequired: boolean): string {
    return isRequired ? 'text-red-600 font-semibold' : 'text-gray-600';
  }

  getMappedFieldsCount(): number {
    return this.mappings.filter(mapping => mapping.isMapped).length;
  }

  getRequiredFieldsCount(): number {
    return this.mappings.filter(mapping => mapping.isRequired).length;
  }

  getMappedRequiredFieldsCount(): number {
    return this.mappings.filter(mapping => mapping.isRequired && mapping.isMapped).length;
  }

  isMappingValid(): boolean {
    const requiredMappings = this.mappings.filter(mapping => mapping.isRequired);
    const mappedRequired = requiredMappings.filter(mapping => mapping.isMapped);
    return mappedRequired.length === requiredMappings.length;
  }
} 