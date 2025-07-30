import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { environment } from '../../../environments/environment';

export interface ImportStep {
  id: number;
  title: string;
  description: string;
  isActive: boolean;
  isCompleted: boolean;
}

export interface FieldMapping {
  columnName: string;
  systemField: string;
  confidence: 'High' | 'Medium' | 'Low';
  confidenceReason: string;
  isRequired: boolean;
  isMapped: boolean;
}

export interface ImportConflict {
  type: 'duplicate' | 'missing_location' | 'invalid_status' | 'missing_required' | 'data_quality';
  row: number;
  field: string;
  message: string;
  suggestedFix?: string;
  severity: 'error' | 'warning';
  value?: any;
}

export interface ImportSummary {
  totalRows: number;
  validRows: number;
  conflicts: number;
  errors: number;
}

export interface ImportSession {
  file_id: string;
  original_name: string;
  size: number;
  uploaded_at: string;
  status: 'uploaded' | 'analyzing' | 'mapped' | 'conflicts_detected' | 'resolved' | 'importing' | 'completed' | 'failed';
  meta?: any;
}

export interface AnalysisResult {
  headers: string[];
  sample: { [key: string]: any };
  mapping_suggestions: { [key: string]: string };
  confidence: 'high' | 'medium' | 'low';
  missing_required_fields: string[];
}

export interface ConflictResolution {
  row: number;
  field: string;
  action: 'skip' | 'update' | 'create' | 'ignore';
  value?: any;
}

export interface ImportProgress {
  status: string;
  metrics: {
    total_rows: number;
    processed: number;
    imported: number;
    errors: number;
  };
}

export interface ImportResult {
  imported: number;
  skipped: number;
  errors: number;
  error_report_url?: string;
}

@Injectable({ providedIn: 'root' })
export class AssetImportService {
  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  private getAuthHeaders(): { headers: { [header: string]: string } } {
    const token = this.authService.getToken();
    return {
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      }
    };
  }

  // 1. File Upload
  uploadFile(file: File): Observable<{ data: ImportSession }> {
    const formData = new FormData();
    formData.append('file', file);
    
    return this.http.post<{ data: ImportSession }>(`${this.baseUrl}/assets/import/upload`, formData, {
      headers: {
        'Authorization': `Bearer ${this.authService.getToken()}`
      }
    });
  }

  // 2. Analyze Spreadsheet
  analyzeSpreadsheet(fileId: string): Observable<{ data: AnalysisResult }> {
    return this.http.post<{ data: AnalysisResult }>(`${this.baseUrl}/assets/import/analyze`, { file_id: fileId }, this.getAuthHeaders());
  }

  // 3. Get Field Mappings
  getFieldMappings(fileId: string): Observable<{ data: { mappings: { [key: string]: string }, user_overrides: any } }> {
    return this.http.get<{ data: { mappings: { [key: string]: string }, user_overrides: any } }>(`${this.baseUrl}/assets/import/mappings/${fileId}`, this.getAuthHeaders());
  }

  // 4. Save Field Mappings
  saveFieldMappings(fileId: string, mappings: { [key: string]: string }, userOverrides: any = {}): Observable<{ data: { mappings: { [key: string]: string }, user_overrides: any } }> {
    return this.http.put<{ data: { mappings: { [key: string]: string }, user_overrides: any } }>(`${this.baseUrl}/assets/import/mappings/${fileId}`, { 
      mappings, 
      user_overrides: userOverrides 
    }, this.getAuthHeaders());
  }

  // 5. Conflict Detection
  detectConflicts(fileId: string): Observable<{ conflicts: { [group: string]: any[] } }> {
    return this.http.post<{ conflicts: { [group: string]: any[] } }>(`${this.baseUrl}/assets/import/conflicts/${fileId}`, {}, this.getAuthHeaders());
  }

  // 6. Resolve Conflicts
  resolveConflicts(fileId: string, resolutions: { [group: string]: any[] }): Observable<{ data: { resolutions: { [group: string]: any[] } } }> {
    return this.http.post<{ data: { resolutions: { [group: string]: any[] } } }>(`${this.baseUrl}/assets/import/resolve-conflicts/${fileId}`, { resolutions }, this.getAuthHeaders());
  }

  // 7. Final Import
  executeImport(fileId: string): Observable<ImportResult> {
    return this.http.post<ImportResult>(`${this.baseUrl}/assets/import/execute/${fileId}`, {}, this.getAuthHeaders());
  }

  // 8. Import Progress
  getImportProgress(fileId: string): Observable<ImportProgress> {
    return this.http.get<ImportProgress>(`${this.baseUrl}/assets/import/progress/${fileId}`, this.getAuthHeaders());
  }

  // 9. Download Template
  downloadTemplate(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/assets/import/template`, {
      responseType: 'blob',
      ...this.getAuthHeaders()
    });
  }

  // Download template from public assets (alternative method)
  downloadTemplateFromAssets(): void {
    const link = document.createElement('a');
    link.href = '/assets/templates/asset-import-template.csv';
    link.download = 'asset-import-template.csv';
    link.click();
  }

  // Get system fields for mapping (hardcoded based on backend implementation)
  getSystemFields(): Observable<{ data: string[] }> {
    const systemFields = [
      'name',
      'description', 
      'category',
      'serial_number',
      'model',
      'manufacturer',
      'purchase_date',
      'purchase_price',
      'location',
      'status',
      'tags',
      'department'
    ];
    
    return new Observable(observer => {
      observer.next({ data: systemFields });
      observer.complete();
    });
  }

  // Validate file
  validateFile(file: File): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ['.xlsx', '.xls', '.csv'];

    if (file.size > maxSize) {
      errors.push('File size must be less than 10MB');
    }

    const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
    if (!allowedTypes.includes(fileExtension)) {
      errors.push('Only .xlsx, .xls, and .csv files are allowed');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // Helper method to format file size
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  // Helper method to get conflict severity class
  getConflictSeverityClass(severity: string): string {
    switch (severity) {
      case 'error':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  }

  // Helper method to get confidence class
  getConfidenceClass(confidence: string): string {
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