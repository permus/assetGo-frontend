import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AssetService } from '../../services/asset.service';
import { timer } from 'rxjs';
import * as XLSX from 'xlsx';

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

  // Format detection
  detectedFormat: 'STANDARD' | 'EY_MASTER' | 'UNKNOWN' = 'UNKNOWN';
  formatName = '';

  // Asset fields mapping - supports both formats
  assetFields: any[] = [
    // Standard format fields
    { name: 'name', title: 'Asset Name', map: '-1', required: true, showDropdown: false },
    { name: 'asset_id', title: 'Asset ID', map: '-1', required: false, showDropdown: false },
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
    { name: 'status', title: 'Status', map: '-1', required: false, showDropdown: false },
    
    // EY Master format fields
    { name: 'sm_type', title: 'S/M Type', map: '-1', required: false, showDropdown: false },
    { name: 'building', title: 'Building', map: '-1', required: false, showDropdown: false },
    { name: 'floor', title: 'Floor', map: '-1', required: false, showDropdown: false },
    { name: 'brand', title: 'Brand/Make', map: '-1', required: false, showDropdown: false },
    { name: 'capacity', title: 'Capacity/Rating', map: '-1', required: false, showDropdown: false },
    
    // Additional backend fields
    { name: 'depreciation_life', title: 'Depreciation Life (Years)', map: '-1', required: false, showDropdown: false }
  ];

  // Format detection patterns
  formatPatterns = {
    STANDARD: [
      'Asset Name', 'Description', 'Category', 'Type', 'Serial Number', 
      'Model', 'Manufacturer', 'Purchase Date', 'Purchase Price', 'Depreciation',
      'Location', 'Department', 'Warranty', 'Insurance', 'Health Score', 'Status'
    ],
    EY_MASTER: [
      'Asset ID Number', 'S/M Type', 'Building', 'Location', 'Floor', 
      'Asset Description', 'Brand/Make', 'Model No', 'Capacity/Rating'
    ]
  };

  constructor(private assetService: AssetService, private router: Router) {}

  /**
   * Detect file format based on headers
   */
  detectFormat(headers: string[]): 'STANDARD' | 'EY_MASTER' | 'UNKNOWN' {
    const standardMatch = this.formatPatterns.STANDARD.filter(h => 
      headers.some(header => this.normalize(header) === this.normalize(h))
    ).length;
    
    const eyMasterMatch = this.formatPatterns.EY_MASTER.filter(h => 
      headers.some(header => this.normalize(header) === this.normalize(h))
    ).length;

    if (standardMatch >= 10) {
      this.formatName = 'Standard Asset List';
      return 'STANDARD';
    } else if (eyMasterMatch >= 7) {
      this.formatName = 'EY Master Asset List (Starting from Row 2)';
      return 'EY_MASTER';
    }
    
    this.formatName = 'Unknown Format';
    return 'UNKNOWN';
  }

  /**
   * Auto-map fields based on detected format
   */
  autoMapFields(headers: string[]): void {
    this.assetFields.forEach(field => {
      let headerIndex = -1;
      
      if (this.detectedFormat === 'EY_MASTER') {
        // EY Master format specific mappings
        switch (field.name) {
          case 'asset_id':
            // Map to "Asset ID Number" for EY Master
            headerIndex = headers.findIndex(header => 
              this.normalize(header).includes('assetidnumber') || 
              this.normalize(header).includes('assetid') ||
              this.normalize(header).includes('idnumber')
            );
            break;
          case 'name':
            // First try to find "Asset Name" specifically
            headerIndex = headers.findIndex(header => 
              this.normalize(header).includes('assetname') || 
              this.normalize(header).includes('name')
            );
            
            // If no "Asset Name" found, fall back to "Asset ID Number"
            if (headerIndex === -1) {
              headerIndex = headers.findIndex(header => 
                this.normalize(header).includes('assetidnumber') || 
                this.normalize(header).includes('assetid') ||
                this.normalize(header).includes('idnumber')
              );
            }
            break;
          case 'description':
            // Map to "Asset Description" for EY Master
            headerIndex = headers.findIndex(header => 
              this.normalize(header).includes('assetdescription') || 
              this.normalize(header).includes('description')
            );
            break;
          case 'manufacturer':
            // Map to "Brand/Make" for EY Master
            headerIndex = headers.findIndex(header => 
              this.normalize(header).includes('brandmake') || 
              this.normalize(header).includes('brand') ||
              this.normalize(header).includes('make')
            );
            break;
          case 'model':
            // Map to "Model No" for EY Master
            headerIndex = headers.findIndex(header => 
              this.normalize(header).includes('modelno') || 
              this.normalize(header).includes('model')
            );
            break;
          case 'capacity':
            // Map to "Capacity/Rating" for EY Master
            headerIndex = headers.findIndex(header => 
              this.normalize(header).includes('capacityrating') || 
              this.normalize(header).includes('capacity') ||
              this.normalize(header).includes('rating')
            );
            break;
                     case 'sm_type':
             // Map to "S/M Type" for EY Master
             headerIndex = headers.findIndex(header => 
               this.normalize(header).includes('smtype') || 
               this.normalize(header).includes('type')
             );
             break;
           case 'category':
             // Map category to "S/M Type" for EY Master
             headerIndex = headers.findIndex(header => 
               this.normalize(header).includes('smtype') || 
               this.normalize(header).includes('type')
             );
             break;
          case 'building':
            // Map to "Building" for EY Master
            headerIndex = headers.findIndex(header => 
              this.normalize(header).includes('building')
            );
            break;
          case 'floor':
            // Map to "Floor" for EY Master
            headerIndex = headers.findIndex(header => 
              this.normalize(header).includes('floor')
            );
            break;
          case 'location':
            // Map to "Location" for EY Master
            headerIndex = headers.findIndex(header => 
              this.normalize(header).includes('location')
            );
            break;
          default:
            // Try exact match for other fields
            headerIndex = headers.findIndex(header => 
              this.normalize(header) === this.normalize(field.title)
            );
        }
      } else {
        // Standard format - use exact title matching
        headerIndex = headers.findIndex(header => 
          this.normalize(header) === this.normalize(field.title)
        );
      }
      
      field.map = headerIndex >= 0 ? headerIndex.toString() : '-1';
    });
  }

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
    if (!fileExtension || !['csv', 'xlsx', 'xls', 'ods'].includes(fileExtension)) {
      this.errorMessage = 'Please upload a valid spreadsheet file (.csv, .xlsx, .xls, .ods).';
      this.showError = true;
      return;
    }

    // Handle different file types
    if (fileExtension === 'csv') {
      this.parseCSVFile(file);
    } else {
      this.parseExcelFile(file);
    }
  }

  /**
   * Parse CSV file
   */
  private parseCSVFile(file: File): void {
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

        this.processParsedData(allTextLines);
      } catch (error) {
        this.errorMessage = 'Error parsing CSV file: ' + (error as Error).message;
        this.showError = true;
      }
    };

    reader.onerror = () => {
      this.errorMessage = 'Error reading CSV file.';
      this.showError = true;
    };
  }

  /**
   * Parse Excel file (xlsx, xls)
   */
  private parseExcelFile(file: File): void {
    const reader: FileReader = new FileReader();

    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      try {
        const data = new Uint8Array(reader.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        
        // Get the first worksheet
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        
        // Convert to JSON with header row
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        
        if (jsonData.length < 2) {
          this.errorMessage = 'File must contain at least a header row and one data row.';
          this.showError = true;
          return;
        }

        // Convert JSON data to string format for consistency with CSV parsing
        const allTextLines = jsonData.map((row: any) => 
          Array.isArray(row) ? row.map(cell => cell || '').join(',') : ''
        ).filter(line => line.trim() !== '');

        this.processParsedData(allTextLines);
      } catch (error) {
        this.errorMessage = 'Error parsing Excel file: ' + (error as Error).message;
        this.showError = true;
      }
    };

    reader.onerror = () => {
      this.errorMessage = 'Error reading Excel file.';
      this.showError = true;
    };
  }

  /**
   * Process parsed data from either CSV or Excel files
   */
  private processParsedData(allTextLines: string[]): void {
    // For EY Master format, skip the first row and use the second row as headers
    let headerLine: string;
    let actualHeaders: string[];
    let dataStartIndex: number;
    
    if (allTextLines.length >= 2) {
      // Check if first row looks like a title row (contains "EY_Master" or similar)
      const firstRow = this.parseCSVLine(allTextLines[0]);
      const firstRowText = firstRow.join(' ').toLowerCase();
      
      if (firstRowText.includes('ey_master') || firstRowText.includes('asset list')) {
        // Use second row as headers for EY Master format
        headerLine = allTextLines[1];
        actualHeaders = this.parseCSVLine(headerLine);
        dataStartIndex = 2; // Start data from third row
        this.detectedFormat = 'EY_MASTER';
      } else {
        // Use first row as headers for standard format
        headerLine = allTextLines[0];
        actualHeaders = this.parseCSVLine(headerLine);
        dataStartIndex = 1; // Start data from second row
        this.detectedFormat = this.detectFormat(actualHeaders);
      }
    } else {
      // Fallback to first row as headers
      headerLine = allTextLines[0];
      actualHeaders = this.parseCSVLine(headerLine);
      dataStartIndex = 1;
      this.detectedFormat = this.detectFormat(actualHeaders);
    }
    
    // Validate headers
    if (actualHeaders.length === 0) {
      this.errorMessage = 'No valid headers found in the file.';
      this.showError = true;
      return;
    }

    // Auto-map fields using the actual headers
    this.autoMapFields(actualHeaders);

    // Validate minimum rows based on detected format
    const minRowsRequired = this.detectedFormat === 'EY_MASTER' ? 3 : 2;
    if (allTextLines.length < minRowsRequired) {
      this.errorMessage = this.detectedFormat === 'EY_MASTER' 
        ? 'EY Master format requires at least a title row, header row, and one data row.' 
        : 'File must contain at least a header row and one data row.';
      this.showError = true;
      return;
    }

    // Parse data rows starting from the appropriate index
    const rows = allTextLines.slice(dataStartIndex).map(line => this.parseCSVLine(line));
    
    // Filter out empty rows
    const validRows = rows.filter(row => row.length > 0 && row.some(cell => cell.trim() !== ''));

    this.parsedData = { headers: actualHeaders, rows: validRows };
    this.uploaded = true;
    this.nextStep();
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

    // Auto-map fields based on detected format
    this.assetFields.forEach((field, i) => {
      let headerIndex = -1;
      
      if (this.detectedFormat === 'EY_MASTER') {
        // EY Master format specific mappings
        switch (field.name) {
          case 'asset_id':
            // Map to "Asset ID Number" for EY Master
            headerIndex = fields.findIndex((header: string) => 
              this.normalize(header).includes('assetidnumber') || 
              this.normalize(header).includes('assetid') ||
              this.normalize(header).includes('idnumber')
            );
            break;
          case 'name':
            // First try to find "Asset Name" specifically
            headerIndex = fields.findIndex((header: string) => 
              this.normalize(header).includes('assetname') || 
              this.normalize(header).includes('name')
            );
            
            // If no "Asset Name" found, fall back to "Asset ID Number"
            if (headerIndex === -1) {
              headerIndex = fields.findIndex((header: string) => 
                this.normalize(header).includes('assetidnumber') || 
                this.normalize(header).includes('assetid') ||
                this.normalize(header).includes('idnumber')
              );
            }
            break;
          case 'description':
            // Map to "Asset Description" for EY Master
            headerIndex = fields.findIndex((header: string) => 
              this.normalize(header).includes('assetdescription') || 
              this.normalize(header).includes('description')
            );
            break;
          case 'manufacturer':
            // Map to "Brand/Make" for EY Master
            headerIndex = fields.findIndex((header: string) => 
              this.normalize(header).includes('brandmake') || 
              this.normalize(header).includes('brand') ||
              this.normalize(header).includes('make')
            );
            break;
          case 'model':
            // Map to "Model No" for EY Master
            headerIndex = fields.findIndex((header: string) => 
              this.normalize(header).includes('modelno') || 
              this.normalize(header).includes('model')
            );
            break;
          case 'capacity':
            // Map to "Capacity/Rating" for EY Master
            headerIndex = fields.findIndex((header: string) => 
              this.normalize(header).includes('capacityrating') || 
              this.normalize(header).includes('capacity') ||
              this.normalize(header).includes('rating')
            );
            break;
                     case 'sm_type':
             // Map to "S/M Type" for EY Master
             headerIndex = fields.findIndex((header: string) => 
               this.normalize(header).includes('smtype') || 
               this.normalize(header).includes('type')
             );
             break;
           case 'category':
             // Map category to "S/M Type" for EY Master
             headerIndex = fields.findIndex((header: string) => 
               this.normalize(header).includes('smtype') || 
               this.normalize(header).includes('type')
             );
             break;
          case 'building':
            // Map to "Building" for EY Master
            headerIndex = fields.findIndex((header: string) => 
              this.normalize(header).includes('building')
            );
            break;
          case 'floor':
            // Map to "Floor" for EY Master
            headerIndex = fields.findIndex((header: string) => 
              this.normalize(header).includes('floor')
            );
            break;
          case 'location':
            // Map to "Location" for EY Master
            headerIndex = fields.findIndex((header: string) => 
              this.normalize(header).includes('location')
            );
            break;
          default:
            // Try exact match for other fields
            headerIndex = fields.findIndex((header: string) => 
              this.normalize(field.title) === this.normalize(header)
            );
        }
      } else {
        // Standard format - use exact title matching
        headerIndex = fields.findIndex((header: string) => 
          this.normalize(field.title) === this.normalize(header)
        );
      }
      
      if (headerIndex >= 0) {
        this.assetFields[i].map = headerIndex.toString();
      }
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
          console.log(`Processing field ${field.name} (${field.title}): "${value}" from column ${field.map}`);
          if (field.required && (!value || value === '')) {
            hasRequiredData = false;
          }
          
          // Validate status field
          if (field.name === 'status' && value) {
            if (!validStatuses.includes(value)) {
              statusValidationError = `Invalid status value "${value}" in row ${rowIndex + 1}. Valid values are: ${validStatuses.join(', ')}`;
            }
          }
          
                     // Handle EY Master format specific mappings
           if (this.detectedFormat === 'EY_MASTER') {
             switch (field.name) {
               case 'asset_id':
                 asset.asset_id = value; // Map Asset ID Number to asset_id
                 break;
               case 'name':
                 asset.name = value; // Map Asset Name or Asset ID Number to name
                 break;
               case 'description':
                 asset.description = value; // Map Asset Description to description
                 break;
               case 'manufacturer':
                 asset.manufacturer = value; // Map Brand/Make to manufacturer
                 break;
               case 'model':
                 asset.model = value; // Map Model No to model
                 break;
               case 'capacity':
                 asset.capacity = value; // Map Capacity/Rating
                 break;
               case 'category':
                 asset.category = value; // Map S/M Type to category
                 break;
               case 'sm_type':
                 asset.sm_type = value; // Map S/M Type to sm_type
                 break;
               case 'building':
               case 'floor':
               case 'location':
                 // Add location fields directly to asset object
                 asset[field.name] = value;
                 break;
               default:
                 asset[field.name] = value;
             }
           } else {
             asset[field.name] = value;
           }
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
    console.log('Asset fields mapping:', this.assetFields.map(f => ({ name: f.name, title: f.title, map: f.map })));
    console.log('Parsed data headers:', this.parsedData.headers);

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
    this.router.navigate(['/assets/list']);
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