import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AssetService } from '../../services/asset.service';
import { Location as angularLocation } from '@angular/common';
import { PdfExportService } from '../../../shared/services/pdf-export.service';

@Component({
  selector: 'app-public-asset-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './public-asset-view.component.html',
  styleUrl: './public-asset-view.component.scss'
})
export class PublicAssetViewComponent implements OnInit, OnDestroy, AfterViewInit {
  private destroy$ = new Subject<void>();
  @ViewChildren('dateInput') dateInputs!: QueryList<ElementRef>;

  asset: any = null;
  loading = true;
  error = '';
  
  // Image gallery state
  currentImageIndex = 0;
  selectedImageUrl: string | null = null;
  
  // UI state
  descriptionExpanded = false;
  


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private assetService: AssetService,
    private angularLocation: angularLocation,
    private pdfExportService: PdfExportService
  ) {}

  ngOnInit() {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const id = params['id'];
      if (id) {
        this.loadAsset(id);
      }
    });
  }

  ngAfterViewInit() {
    // Initialize any view-specific logic here
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadAsset(id: string) {
    this.loading = true;
    this.error = '';
    
    this.assetService.getAssetPublic(id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.asset = response.data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading asset:', error);
        this.error = 'Failed to load asset details. Please check the URL and try again.';
        this.loading = false;
      }
    });
  }



  getStatusColor(status: string): string {
    switch (status?.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800';
      case 'retired':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  getStatusColorFromAssetStatus(assetStatus: any): string {
    if (!assetStatus) return 'bg-gray-100 text-gray-800';
    
    // Use the color from asset_status if available
    if (assetStatus.color) {
      // For Tailwind CSS, we need to use predefined color classes
      // Map common hex colors to Tailwind classes
      const colorMap: { [key: string]: string } = {
        '#9CA3AF': 'bg-gray-100 text-gray-800',
        '#EF4444': 'bg-red-100 text-red-800',
        '#10B981': 'bg-green-100 text-green-800',
        '#F59E0B': 'bg-yellow-100 text-yellow-800',
        '#3B82F6': 'bg-blue-100 text-blue-800',
        '#8B5CF6': 'bg-purple-100 text-purple-800',
        '#EC4899': 'bg-pink-100 text-pink-800',
        '#F97316': 'bg-orange-100 text-orange-800'
      };
      
      return colorMap[assetStatus.color] || this.getStatusColor(assetStatus.name);
    }
    
    // Fallback to status name
    return this.getStatusColor(assetStatus.name);
  }

  getAssetTypeIcon(): string {
    if (!this.asset?.type) return 'cube';
    
    const typeName = this.asset.type.toLowerCase();
    if (typeName.includes('computer') || typeName.includes('laptop')) return 'computer';
    if (typeName.includes('furniture')) return 'couch';
    if (typeName.includes('vehicle')) return 'truck';
    if (typeName.includes('building')) return 'building';
    if (typeName.includes('equipment')) return 'wrench';
    return 'cube';
  }

  formatDate(date: string): string {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  getAssetTypeName(assetType: any): string {
    if (!assetType) return 'N/A';
    return assetType.name || 'N/A';
  }

  onImageError(event: any) {
    event.target.style.display = 'none';
  }

  onCategoryIconError(event: any, category: any) {
    event.target.src = '/assets/icons/cube.svg';
  }

  downloadQRCode() {
    if (this.asset?.qr_code) {
      const link = document.createElement('a');
      link.href = this.asset.qr_code;
      link.download = `asset-${this.asset.id}-qr.png`;
      link.click();
    }
  }



  copyAssetId() {
    if (this.asset?.id) {
      navigator.clipboard.writeText(this.asset.id.toString()).then(() => {
        // Could add a toast notification here
        console.log('Asset ID copied to clipboard');
      });
    }
  }

  copySerialNumber() {
    if (this.asset?.serial_number) {
      navigator.clipboard.writeText(this.asset.serial_number).then(() => {
        // Could add a toast notification here
        console.log('Serial number copied to clipboard');
      });
    }
  }

  selectImage(index: number) {
    if (this.asset?.images && this.asset.images[index]) {
      this.currentImageIndex = index;
      this.selectedImageUrl = this.asset.images[index];
    }
  }

  previousImage() {
    if (this.asset?.images && this.asset.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.asset.images.length) % this.asset.images.length;
      this.selectedImageUrl = this.asset.images[this.currentImageIndex];
    }
  }

  nextImage() {
    if (this.asset?.images && this.asset.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.asset.images.length;
      this.selectedImageUrl = this.asset.images[this.currentImageIndex];
    }
  }

  viewFullImage(imageUrl: string) {
    this.selectedImageUrl = imageUrl;
  }

  closeImageModal() {
    this.selectedImageUrl = null;
  }
} 