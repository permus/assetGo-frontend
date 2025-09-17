import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecognitionResult } from './ai-recognition-result.interface';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AIImageUploadService {
  private readonly MAX_SIZE = 10 * 1024 * 1024;
  private readonly ALLOWED = ['image/png','image/jpeg','image/jpg'];
  constructor(private http: HttpClient) {}

  private getAuthHeaders(): { headers: { [header: string]: string } } {
    const token = localStorage.getItem('token');
    return {
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      }
    };
  }

  validate(file: File): { ok: boolean; reason?: string } {
    if (!this.ALLOWED.includes(file.type)) return { ok: false, reason: 'Only PNG/JPG allowed' };
    if (file.size > this.MAX_SIZE) return { ok: false, reason: 'File exceeds 10MB' };
    return { ok: true };
  }

  async toDataUrl(file: File): Promise<string> {
    // Compress image before encoding
    const compressedFile = await this.compressImage(file);
    
    // Use FileReader for safe base64 conversion
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(compressedFile);
    });
  }

  private async compressImage(file: File, quality: number = 0.8): Promise<File> {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;
      const img = new Image();

      img.onload = () => {
        // Limit dimensions to max 2048px
        const maxSize = 2048;
        let { width, height } = img;

        if (width > height) {
          if (width > maxSize) {
            height = (height * maxSize) / width;
            width = maxSize;
          }
        } else {
          if (height > maxSize) {
            width = (width * maxSize) / height;
            height = maxSize;
          }
        }

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(new File([blob], file.name, { type: 'image/jpeg' }));
            } else {
              resolve(file);
            }
          },
          'image/jpeg',
          quality
        );
      };

      img.src = URL.createObjectURL(file);
    });
  }

  analyze(dataUrls: string[]) {
    // Strip data URL prefix and send clean base64
    const cleanBase64Images = dataUrls.map(dataUrl => 
      dataUrl.replace(/^data:image\/\w+;base64,/, '')
    );
    
    return this.http.post<{success:boolean; data: RecognitionResult}>(
      `${environment.apiUrl}/ai/image-recognition/analyze`,
      { images: cleanBase64Images },
      this.getAuthHeaders()
    );
  }
}
