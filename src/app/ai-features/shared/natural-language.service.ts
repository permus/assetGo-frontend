import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timeout, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { 
  AssetContext, 
  ChatRequest, 
  ChatResponse, 
  ContextResponse 
} from './natural-language.interface';

@Injectable({
  providedIn: 'root'
})
export class NaturalLanguageService {
  private apiUrl = `${environment.apiUrl}/ai/natural-language`;
  private readonly REQUEST_TIMEOUT = 30000; // 30 seconds
  private readonly API_KEY_CHECK_TIMEOUT = 10000; // 10 seconds

  constructor(private http: HttpClient) { }

  /**
   * Get asset context for natural language queries.
   */
  getContext(): Observable<ContextResponse> {
    return this.http.get<ContextResponse>(`${this.apiUrl}/context`)
      .pipe(
        timeout(this.REQUEST_TIMEOUT),
        catchError(error => {
          if (error.name === 'TimeoutError' || error.error?.name === 'TimeoutError') {
            return throwError(() => new Error('Request timed out. Please try again.'));
          }
          return throwError(() => error);
        })
      );
  }

  /**
   * Send chat message to AI.
   */
  chat(request: ChatRequest): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(`${this.apiUrl}/chat`, request)
      .pipe(
        timeout(this.REQUEST_TIMEOUT),
        catchError(error => {
          if (error.name === 'TimeoutError' || error.error?.name === 'TimeoutError') {
            return throwError(() => new Error('Request timed out. Please try again.'));
          }
          return throwError(() => error);
        })
      );
  }

  /**
   * Check if OpenAI API key is configured.
   */
  checkApiKey(): Observable<{ success: boolean; hasApiKey: boolean }> {
    return this.http.get<{ success: boolean; hasApiKey: boolean }>(`${this.apiUrl}/check-api-key`)
      .pipe(
        timeout(this.API_KEY_CHECK_TIMEOUT),
        catchError(error => {
          if (error.name === 'TimeoutError' || error.error?.name === 'TimeoutError') {
            return throwError(() => new Error('Request timed out.'));
          }
          return throwError(() => error);
        })
      );
  }

  /**
   * Format markdown content for display.
   */
  formatMarkdown(content: string): string {
    // Basic markdown formatting
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^\* (.*$)/gim, '<li>$1</li>')
      .replace(/^- (.*$)/gim, '<li>$1</li>');
  }

  /**
   * Copy text to clipboard.
   */
  async copyToClipboard(text: string): Promise<boolean> {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        document.body.removeChild(textArea);
        return true;
      } catch (err) {
        document.body.removeChild(textArea);
        return false;
      }
    }
  }
}
