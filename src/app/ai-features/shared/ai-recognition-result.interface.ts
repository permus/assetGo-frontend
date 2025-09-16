export type Condition = 'Excellent' | 'Good' | 'Fair' | 'Poor';

export interface RecognitionResult {
  assetType: string;
  confidence: number; // 0-100
  manufacturer?: string | null;
  model?: string | null;
  serialNumber?: string | null;
  assetTag?: string | null;
  condition: Condition;
  recommendations: string[];
  evidence?: {
    fieldsFound: string[];
    imagesUsed: number;
    notes?: string | null;
  };
}
