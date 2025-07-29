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
  type: 'Asset ID' | 'Status' | 'Category' | 'Data Quality';
  row: number;
  field: string;
  message: string;
  suggestedFix?: string;
  severity: 'error' | 'warning';
}

export interface ImportSummary {
  totalRows: number;
  validRows: number;
  conflicts: number;
  errors: number;
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

  // Step 1: Upload file
  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    
    return this.http.post(`${this.baseUrl}/assets/import/upload`, formData, {
      headers: {
        'Authorization': `Bearer ${this.authService.getToken()}`
      }
    });
  }

  // Step 2: Analyze spreadsheet
  analyzeSpreadsheet(fileId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/assets/import/analyze`, { file_id: fileId }, this.getAuthHeaders());
  }

  // Step 3: Get field mappings
  getFieldMappings(fileId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/assets/import/mappings/${fileId}`, this.getAuthHeaders());
  }

  // Step 3: Update field mappings
  updateFieldMappings(fileId: string, mappings: FieldMapping[]): Observable<any> {
    return this.http.put(`${this.baseUrl}/assets/import/mappings/${fileId}`, { mappings }, this.getAuthHeaders());
  }

  // Step 4: Detect conflicts
  detectConflicts(fileId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/assets/import/conflicts/${fileId}`, {}, this.getAuthHeaders());
  }

  // Step 4: Resolve conflicts
  resolveConflicts(fileId: string, resolutions: any[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/assets/import/resolve-conflicts/${fileId}`, { resolutions }, this.getAuthHeaders());
  }

  // Step 5: Final import
  executeImport(fileId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/assets/import/execute/${fileId}`, {}, this.getAuthHeaders());
  }

  // Get import progress
  getImportProgress(importId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/assets/import/progress/${importId}`, this.getAuthHeaders());
  }

  // Download template
  downloadTemplate(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/assets/import/template`, {
      responseType: 'blob',
      ...this.getAuthHeaders()
    });
  }

  // Download template from public assets (alternative method)
  downloadTemplateFromAssets(): void {
    const link = document.createElement('a');
    link.href = '/templates/asset-import.csv';
    link.download = 'asset-import-template.csv';
    link.click();
  }

  // Get system fields for mapping
  getSystemFields(): Observable<any> {
    return this.http.get(`${this.baseUrl}/assets/import/system-fields`, this.getAuthHeaders());
  }

  // Validate file
  validateFile(file: File): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ['.xlsx', '.csv'];

    if (file.size > maxSize) {
      errors.push('File size must be less than 10MB');
    }

    const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
    if (!allowedTypes.includes(fileExtension)) {
      errors.push('Only .xlsx and .csv files are allowed');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
} 