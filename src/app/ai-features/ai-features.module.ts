import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AIImageRecognitionComponent } from './ai-image-recognition/ai-image-recognition.component';
import { AIFeaturesComponent } from './ai-features.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, AIImageRecognitionComponent, AIFeaturesComponent],
  exports: [AIImageRecognitionComponent, AIFeaturesComponent]
})
export class AIFeaturesModule {}
