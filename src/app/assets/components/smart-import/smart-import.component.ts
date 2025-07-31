import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AssetService } from '../../services/asset.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-smart-import',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './smart-import.component.html',
  styleUrls: ['./smart-import.component.scss']
})
export class SmartImportComponent {
  @Output() importComplete = new EventEmitter<void>();
  
  // Step management
  currentStep = 1;
  totalSteps = 4;
  
  // File upload state
  uploadedData: any = null;
  parsedData: any = null;
  uploaded = false;
  
  // Field mapping state
  importFields: any[] = [];
  initMapFields = false;
  
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

  // Asset fields mapping - updated to match backend validation
  assetFields: any[] = [
    { name: 'name', title: 'Asset Name', map: '-1', required: true, showDropdown: false },
    { name: 'description', title: 'Description', map: '-1', required: false, showDropdown: false },
    { name: 'category', title: 'Category', map: '-1', required: false, showDropdown: false },
    { name: 'type', title: 'Asset Type', map: '-1', required: false, showDropdown: false },
    { name: 'serial_number', title: 'Serial Number', map: '-1', required: false, showDropdown: false },
    { name: 'model', title: 'Model', map: '-1', required: false, showDropdown: false },
    { name: 'manufacturer', title: 'Manufacturer', map: '-1', required: false, showDropdown: false },
    { name: 'purchase_date', title: 'Purchase Date', map: '-1', required: false, showDropdown: false },
    { name: 'purchase_price', title: 'Purchase Price', map: '-1', required: false, showDropdown: false },
    { name: 'depreciation', title: 'Depreciation', map: '-1', required: false, showDropdown: false },
    { name: 'location', title: 'Location', map: '-1', required: false, showDropdown: false },
    { name: 'department', title: 'Department', map: '-1', required: false, showDropdown: false },
    { name: 'warranty', title: 'Warranty', map: '-1', required: false, showDropdown: false },
    { name: 'insurance', title: 'Insurance', map: '-1', required: false, showDropdown: false },
    { name: 'health_score', title: 'Health Score', map: '-1', required: false, showDropdown: false },
    { name: 'status', title: 'Status', map: '-1', required: false, showDropdown: false }
  ];

  constructor(private assetService: AssetService, private router: Router) {}

  /**
   * Parse uploaded file
   */
  parseFile(event: any): void {
    const file = event.target.files[0];
    this.uploadedData = file;
    
    // Clear any existing errors
    this.clearError();
    
    if (!file) {
      this.errorMessage = 'No file selected';
      this.showError = true;
      return;
    }

    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    if (!fileExtension || !['csv'].includes(fileExtension)) {
      this.errorMessage = 'Please upload a valid CSV file. Excel files (.xls, .xlsx) are not supported in this version.';
      this.showError = true;
      return;
    }

    const reader: FileReader = new FileReader();

    reader.readAsText(file);
    reader.onload = () => {
      try {
        const csv = reader.result as string;
        
        // Validate that we have actual text data, not binary
        if (csv.length > 1000 && csv.includes('\0')) {
          this.errorMessage = 'Invalid file format. Please ensure you are uploading a valid CSV file.';
          this.showError = true;
          return;
        }

        const allTextLines = csv.split(/\r?\n/).filter(line => line.trim() !== '');
        
        if (allTextLines.length < 2) {
          this.errorMessage = 'File must contain at least a header row and one data row.';
          this.showError = true;
          return;
        }

        // Parse headers - handle quoted values
        const headerLine = allTextLines[0];
        const headers = this.parseCSVLine(headerLine);
        
        // Validate headers
        if (headers.length === 0) {
          this.errorMessage = 'No valid headers found in the CSV file.';
          this.showError = true;
          return;
        }

        // Parse data rows
        const rows = allTextLines.slice(1).map(line => this.parseCSVLine(line));
        
        // Filter out empty rows
        const validRows = rows.filter(row => row.length > 0 && row.some(cell => cell.trim() !== ''));

        this.parsedData = { headers, rows: validRows };
        this.uploaded = true;
        this.nextStep();
      } catch (error) {
        console.error('Error parsing file:', error);
        this.errorMessage = 'Error parsing the file. Please ensure it is a valid CSV file.';
        this.showError = true;
      }
    };

    reader.onerror = () => {
      this.errorMessage = 'Error reading the file. Please try again.';
      this.showError = true;
    };
  }

  /**
   * Parse a single CSV line, handling quoted values
   */
  parseCSVLine(line: string): string[] {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      
      if (char === '"') {
        if (inQuotes && line[i + 1] === '"') {
          // Escaped quote
          current += '"';
          i++; // Skip next quote
        } else {
          // Toggle quote state
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        // End of field
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    
    // Add the last field
    result.push(current.trim());
    
    return result;
  }

  /**
   * Normalize string for comparison
   */
  normalize(str: string): string {
    return str.toLowerCase().replace(/[^a-z0-9]/gi, '').trim();
  }

  /**
   * Get file size in KB
   */
  getFileSizeInKB(size: number = 0): number {
    return Math.round(size / 1024);
  }

  /**
   * Navigate to next step
   */
  nextStep(): void {
    if (this.currentStep < this.totalSteps) {
      this.clearError();
      this.currentStep++;
    }
  }

  /**
   * Navigate to previous step
   */
  previousStep(): void {
    if (this.currentStep > 1) {
      this.clearError();
      this.currentStep--;
    }
  }

  /**
   * Go back to file upload
   */
  back(): void {
    this.clearError();
    this.uploaded = false;
    this.parsedData = null;
    this.uploadedData = null;
    this.currentStep = 1;
  }

  /**
   * Proceed to field mapping
   */
  makeMapped(): void {
    this.clearError();
    this.importFields = [];
    const fields = this.parsedData.headers;
    this.initMapFields = true;

    // Reset all field mappings
    this.assetFields.forEach(field => {
      field.map = '-1';
      field.showDropdown = false;
    });

    // Auto-map fields based on name similarity
    this.assetFields.forEach((field, i) => {
      fields.forEach((header: string, j: number) => {
        if (this.normalize(field.title) === this.normalize(header)) {
          this.assetFields[i].map = j.toString();
        }
      });
    });

    // Add all fields from the CSV to importFields for dropdown
    fields.forEach((field: string, i: number) => {
      // Clean the field name and ensure it's not empty
      const cleanField = field.trim();
      if (cleanField && cleanField.length > 0) {
        this.importFields.push({ 
          field: cleanField, 
          map: i.toString() 
        });
      }
    });

    // Validate that we have valid fields
    if (this.importFields.length === 0) {
      this.errorMessage = 'No valid fields found in the uploaded file. Please check your CSV format.';
      this.showError = true;
      return;
    }

    this.nextStep();
  }

  /**
   * Format error message from API response
   */
  formatErrorMessage(error: any): string {
    if (error.error && error.error.data && error.error.data.errors) {
      // Handle validation errors from Laravel
      const validationErrors = error.error.data.errors;
      const errorMessages = Object.keys(validationErrors).map(field => {
        return `${field}: ${validationErrors[field].join(', ')}`;
      });
      return `Validation errors:\n${errorMessages.join('\n')}`;
    } else if (error.error && error.error.message) {
      return error.error.message;
    } else if (error.error && error.error.error) {
      return error.error.error;
    } else if (error.message) {
      return error.message;
    } else {
      return 'Import failed. Please check your data and try again.';
    }
  }

  /**
   * Import assets
   */
  import(): void {
    this.clearError();
    this.importLoading = true;
    const assets: any[] = [];

    // Validate required field mappings - only name is required according to backend
    const requiredFields = this.assetFields.filter(field => field.required);
    const missingRequired = requiredFields.filter(field => field.map === '-1');
    
    if (missingRequired.length > 0) {
      this.importLoading = false;
      this.errorMessage = `Please map the following required fields: ${missingRequired.map(field => field.title).join(', ')}`;
      this.showError = true;
      return;
    }

    // Valid status values - backend accepts any string, but common values are:
    const validStatuses = ['Active', 'Inactive', 'Maintenance', 'Retired', 'active', 'inactive', 'maintenance', 'retired'];

    this.parsedData.rows.forEach((row: string[], rowIndex: number) => {
      // Skip empty rows
      if (!row || row.length === 0 || row.every(cell => !cell || cell.trim() === '')) {
        return;
      }

      const asset: any = {};
      let hasRequiredData = true;
      let statusValidationError = '';
      
      this.assetFields.forEach((field) => {
        if (field.map !== '-1' && row[parseInt(field.map)] !== undefined) {
          const value = row[parseInt(field.map)].trim();
          if (field.required && (!value || value === '')) {
            hasRequiredData = false;
          }
          
          // Validate status field
          if (field.name === 'status' && value) {
            if (!validStatuses.includes(value)) {
              statusValidationError = `Invalid status value "${value}" in row ${rowIndex + 1}. Valid values are: ${validStatuses.join(', ')}`;
            }
          }
          
          asset[field.name] = value;
        }
      });

      // Check for status validation errors
      if (statusValidationError) {
        this.importLoading = false;
        this.errorMessage = statusValidationError;
        this.showError = true;
        return;
      }

      // Only add assets that have required data - only name is required according to backend
      if (hasRequiredData && asset.name) {
        assets.push(asset);
      }
    });

    if (assets.length === 0) {
      this.importLoading = false;
      this.errorMessage = 'No valid assets found to import. Please check your data and field mappings.';
      this.showError = true;
      return;
    }

    console.log('Importing assets:', assets);

    timer(300).subscribe({
      complete: () => {
        this.assetService.bulkImportAssets({ assets }).subscribe({
          next: (response) => {
            console.log('Import response:', response);
            if (response.success) {
              this.importResults = response.data;
              this.importedCount = response.data.imported_count || 0;
              this.isImportComplete = true;
              this.showResults = true;
              this.nextStep();
            } else {
              this.errorMessage = response.message || 'Import failed';
              this.showError = true;
            }
            this.importLoading = false;
          },
          error: (error) => {
            console.error('Import error:', error);
            this.errorMessage = this.formatErrorMessage(error);
            this.showError = true;
            this.importLoading = false;
          }
        });
      }
    });
  }

  /**
   * Clear error message
   */
  clearError(): void {
    this.errorMessage = '';
    this.showError = false;
  }

  /**
   * Reset component state
   */
  reset(): void {
    this.currentStep = 1;
    this.uploaded = false;
    this.initMapFields = false;
    this.importLoading = false;
    this.isImportComplete = false;
    this.importedCount = 0;
    this.parsedData = null;
    this.uploadedData = null;
    this.importFields = [];
    this.assetFields.forEach(field => {
      field.map = '-1';
      field.showDropdown = false;
    });
    this.importResults = null;
    this.showResults = false;
    this.clearError();
  }

  /**
   * Close modal and navigate to assets list
   */
  closeModal(): void {
    this.importComplete.emit();
    this.reset();
    this.router.navigate(['/assets']);
  }

  /**
   * Track by function for ngFor
   */
  trackByField(index: number, field: any): string {
    return field.name;
  }

  /**
   * Track by function for import fields
   */
  trackByImportField(index: number, field: any): string {
    return field.map;
  }

  /**
   * Toggle dropdown for a specific field
   */
  toggleFieldDropdown(field: any): void {
    // Close all other dropdowns first
    this.assetFields.forEach(f => {
      if (f !== field) {
        f.showDropdown = false;
      }
    });
    
    // Toggle current dropdown
    field.showDropdown = !field.showDropdown;
  }

  /**
   * Get the selected field name for display
   */
  getSelectedFieldName(field: any): string {
    if (field.map === '-1') {
      return 'Not Mapped';
    }
    
    const selectedField = this.importFields.find(f => f.map === field.map);
    return selectedField ? selectedField.field : 'Unknown Field';
  }

  /**
   * Close all dropdowns when clicking outside
   */
  closeAllDropdowns(): void {
    this.assetFields.forEach(field => {
      field.showDropdown = false;
    });
  }
} 