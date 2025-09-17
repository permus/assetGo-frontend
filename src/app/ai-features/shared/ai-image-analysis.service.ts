import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface TaskAnalysisResult {
  title: string;
  description: string;
  priority: number;
  category: string;
  notes: string;
  subtasks: string[];
}

export interface AIResponse {
  success: boolean;
  data?: TaskAnalysisResult;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AIImageAnalysisService {
  private apiUrl = `${environment.apiUrl}/ai/image-recognition`;

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token') ?? ''}`,
        'Content-Type': 'application/json'
      })
    };
  }

  analyzeImageForTask(imageBase64: string): Observable<AIResponse> {
    return this.http.post<AIResponse>(
      `${this.apiUrl}/analyze`,
      { 
        images: [imageBase64]
      },
      this.getAuthHeaders()
    );
  }

  fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        // Extract base64 part from data URL
        const base64 = result.split(',')[1] || result;
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  isValidImageFile(file: File): boolean {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    return allowedTypes.includes(file.type);
  }

  isValidFileSize(file: File): boolean {
    const maxSize = 10 * 1024 * 1024; // 10MB
    return file.size <= maxSize;
  }

  validateFile(file: File): { valid: boolean; error?: string } {
    if (!this.isValidImageFile(file)) {
      return { valid: false, error: 'Invalid file type. Only JPG, PNG, GIF, and WebP are allowed.' };
    }
    if (!this.isValidFileSize(file)) {
      return { valid: false, error: 'File size too large. Maximum 10MB allowed.' };
    }
    return { valid: true };
  }

  // Submit feedback for analysis results
  submitFeedback(analysisId: number, feedbackType: 'accurate' | 'needs_correction', corrections?: string[]): Observable<{success: boolean; message?: string}> {
    return this.http.post<{success: boolean; message?: string}>(
      `${this.apiUrl}/feedback`,
      {
        analysis_id: analysisId,
        feedback_type: feedbackType,
        corrections: corrections || []
      },
      this.getAuthHeaders()
    );
  }

  // Get analysis history
  getAnalysisHistory(page: number = 1, perPage: number = 10): Observable<{success: boolean; data: any[]; message?: string}> {
    return this.http.get<{success: boolean; data: any[]; message?: string}>(
      `${this.apiUrl}/history?page=${page}&per_page=${perPage}`,
      this.getAuthHeaders()
    );
  }
}
