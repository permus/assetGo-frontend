import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AIImageUploadService } from '../shared/ai-image-upload.service';
import { RecognitionResult } from '../shared/ai-recognition-result.interface';

@Component({
  selector: 'app-ai-image-recognition',
  templateUrl: './ai-image-recognition.component.html',
  styleUrls: ['./ai-image-recognition.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AIImageRecognitionComponent {
  files: File[] = [];
  previews: string[] = [];
  isAnalyzing = false;
  result: RecognitionResult | null = null;
  errorMsg = '';

  constructor(private up: AIImageUploadService) {}

  async onSelect(e: Event) {
    const input = e.target as HTMLInputElement;
    if (!input.files?.length) return;
    for (const f of Array.from(input.files)) {
      const v = this.up.validate(f);
      if (!v.ok) { this.errorMsg = v.reason || 'Invalid file'; continue; }
      this.files.push(f);
      this.previews.push(await this.up.toDataUrl(f));
    }
  }

  async analyze() {
    if (this.previews.length === 0) return;
    this.isAnalyzing = true; this.errorMsg = ''; this.result = null;
    this.up.analyze(this.previews).subscribe({
      next: (r) => { this.result = r.data; this.isAnalyzing = false; },
      error: (err) => { this.errorMsg = err?.error?.message || 'Analysis failed'; this.isAnalyzing = false; }
    });
  }

  remove(i: number) { this.files.splice(i,1); this.previews.splice(i,1); }

  getConfidenceClass(isHighConfidence: boolean): string {
    return isHighConfidence ? 'confidence-high' : 'confidence-low';
  }
}
