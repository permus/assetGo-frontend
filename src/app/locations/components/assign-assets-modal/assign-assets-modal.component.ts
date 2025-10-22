import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { LocationService } from '../../services/location.service';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';

@Component({
  selector: 'app-assign-assets-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './assign-assets-modal.component.html',
  styleUrl: './assign-assets-modal.component.scss'
})
export class AssignAssetsModalComponent implements OnInit, OnDestroy {
  @Input() isOpen = false;
  @Input() locationId: number | null = null;
  @Input() locationName: string = '';
  @Output() closeModal = new EventEmitter<void>();
  @Output() assetsAssigned = new EventEmitter<number>();

  private destroy$ = new Subject<void>();

  // Data
  assets: any[] = [];
  selectedAssetIds: Set<number> = new Set();
  
  // State
  loading = false;
  assigning = false;
  error: string | null = null;

  // Search
  searchControl = new FormControl('');

  // Pagination
  pagination = {
    current_page: 1,
    last_page: 1,
    per_page: 20,
    total: 0,
    from: 0,
    to: 0
  };

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    // Setup search with debounce
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.pagination.current_page = 1;
        this.loadAssets();
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnChanges() {
    if (this.isOpen && this.locationId) {
      this.selectedAssetIds.clear();
      this.pagination.current_page = 1;
      this.loadAssets();
    }
  }

  loadAssets() {
    if (!this.locationId) return;

    this.loading = true;
    this.error = null;

    this.locationService.getAssignableAssets(this.locationId, {
      search: this.searchControl.value || undefined,
      per_page: this.pagination.per_page,
      page: this.pagination.current_page
    }).pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.assets = response.data.assets;
            this.pagination = response.data.pagination;
          }
          this.loading = false;
        },
        error: (error) => {
          this.error = error.error?.message || 'Failed to load assets';
          this.loading = false;
        }
      });
  }

  toggleAsset(assetId: number) {
    if (this.selectedAssetIds.has(assetId)) {
      this.selectedAssetIds.delete(assetId);
    } else {
      this.selectedAssetIds.add(assetId);
    }
  }

  toggleAll() {
    if (this.selectedAssetIds.size === this.assets.length) {
      this.selectedAssetIds.clear();
    } else {
      this.assets.forEach(asset => this.selectedAssetIds.add(asset.id));
    }
  }

  isAssetSelected(assetId: number): boolean {
    return this.selectedAssetIds.has(assetId);
  }

  get selectedCount(): number {
    return this.selectedAssetIds.size;
  }

  get allSelected(): boolean {
    return this.assets.length > 0 && this.selectedAssetIds.size === this.assets.length;
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.pagination.last_page) {
      this.pagination.current_page = page;
      this.loadAssets();
    }
  }

  assignAssets() {
    if (!this.locationId || this.selectedAssetIds.size === 0) return;

    this.assigning = true;
    this.error = null;

    this.locationService.assignAssets(this.locationId, Array.from(this.selectedAssetIds))
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.assetsAssigned.emit(response.data.assigned_count);
            this.close();
          }
          this.assigning = false;
        },
        error: (error) => {
          this.error = error.error?.message || 'Failed to assign assets';
          this.assigning = false;
        }
      });
  }

  close() {
    this.selectedAssetIds.clear();
    this.searchControl.setValue('');
    this.error = null;
    this.closeModal.emit();
  }
}

