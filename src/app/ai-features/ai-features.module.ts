import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AIImageRecognitionComponent } from './ai-image-recognition/ai-image-recognition.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, AIImageRecognitionComponent],
  exports: [AIImageRecognitionComponent]
})
export class AIFeaturesModule {}
