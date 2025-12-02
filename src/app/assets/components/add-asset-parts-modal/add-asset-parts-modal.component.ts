import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InventoryAnalyticsService, InventoryPart, PartsCatalogResponse } from '../../../core/services/inventory-analytics.service';
import { ToastService } from '../../../core/services/toast.service';
import { CurrencyService } from '../../../core/services/currency.service';
import { AssetService } from '../../services/asset.service';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NumberFormatPipe } from '../../../core/pipes/number-format.pipe';

export interface AssetPartItem {
  id?: number;
  asset_id: number;
  part_id: number;
  part?: { id: number; name: string; uom?: string };
  qty: number;
  unit_cost?: number | null;
  created_at?: string;
  updated_at?: string;
}

@Component({
  selector: 'app-add-asset-parts-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, NumberFormatPipe],
  templateUrl: './add-asset-parts-modal.component.html',
  styleUrls: ['./add-asset-parts-modal.component.scss']
})
export class AddAssetPartsModalComponent implements OnChanges, OnDestroy {
  @Input() assetId!: number;
  @Input() isOpen = false;
  @Input() assetLocationId?: number | null;
  @Output() closed = new EventEmitter<void>();
  @Output() saved = new EventEmitter<AssetPartItem[]>();

  query = '';
  results: InventoryPart[] = [];
  cart: Array<{ part: InventoryPart; qty: number; unit_cost?: number }> = [];
  loading = false;
  searchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  currencySymbol = '$'; // Default, will be updated from service

  constructor(
    private assetService: AssetService, 
    private inv: InventoryAnalyticsService,
    private toastService: ToastService,
    private currencyService: CurrencyService
  ) {
    // Setup debounced search
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(query => {
      this.performSearch(query);
    });

    // Initialize currency from service
    this.currencyService.refreshFromServer().subscribe(() => {
      this.currencySymbol = this.currencyService.getSymbol();
    });
    
    // Subscribe to currency changes
    this.currencyService.get$().pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.currencySymbol = this.currencyService.getSymbol();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearchInput(): void {
    this.searchSubject.next(this.query);
  }

  performSearch(searchQuery: string): void {
    if (!searchQuery || searchQuery.trim().length < 2) {
      this.results = [];
      return;
    }

    this.loading = true;
    this.inv.getPartsCatalog(searchQuery.trim(), undefined, 1, 50).subscribe({
      next: (resp: PartsCatalogResponse) => {
        this.results = resp?.data?.data || [];
        this.loading = false;
      },
      error: () => { 
        this.loading = false;
        this.toastService.error('Failed to search parts');
      }
    });
  }

  search(): void {
    this.performSearch(this.query);
  }

  getAvailableStock(part: InventoryPart): number {
    return part.total_available_stock ?? 0;
  }

  getPrimaryLocation(part: InventoryPart): string {
    return part.primary_location?.name || 'N/A';
  }

  getCategory(part: InventoryPart): string {
    return part.maintenance_category || 'N/A';
  }

  getMinStock(part: InventoryPart): number {
    return part.minimum_stock ?? part.reorder_point ?? 0;
  }

  incrementQty(part: InventoryPart): void {
    const cartItem = this.cart.find(c => c.part.id === part.id);
    if (cartItem) {
      cartItem.qty = Math.max(0.001, cartItem.qty + 1);
    }
  }

  decrementQty(part: InventoryPart): void {
    const cartItem = this.cart.find(c => c.part.id === part.id);
    if (cartItem && cartItem.qty > 0.001) {
      cartItem.qty = Math.max(0.001, cartItem.qty - 1);
    }
  }

  updateQty(part: InventoryPart, event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = parseFloat(input.value) || 0.001;
    const cartItem = this.cart.find(c => c.part.id === part.id);
    if (cartItem) {
      cartItem.qty = Math.max(0.001, value);
    }
  }

  getCartQty(partId: number): number {
    const cartItem = this.cart.find(c => c.part.id === partId);
    return cartItem?.qty || 1;
  }

  getTotalCost(part: InventoryPart, qty: number): number {
    const unitCost = part.unit_cost || 0;
    return unitCost * qty;
  }

  getCartTotalCost(): number {
    return this.cart.reduce((sum, item) => {
      return sum + this.getTotalCost(item.part, item.qty);
    }, 0);
  }

  addToCart(part: InventoryPart): void {
    const existing = this.cart.find((c) => c.part.id === part.id);
    if (existing) {
      existing.qty += 1;
      return;
    }
    this.cart.push({ 
      part, 
      qty: 1, 
      unit_cost: part.unit_cost || undefined
    });
  }

  removeFromCart(partId: number): void {
    this.cart = this.cart.filter((c) => c.part.id !== partId);
  }

  isPartInCart(partId: number): boolean {
    return this.cart.some((c) => c.part.id === partId);
  }

  async save(): Promise<void> {
    if (this.cart.length === 0) {
      this.toastService.error('Please select at least one part');
      return;
    }

    // If assetId is 0 or not set, we're creating a new asset
    // In this case, emit the parts to the parent component instead of saving via API
    if (!this.assetId || this.assetId === 0) {
      // Convert cart items to AssetPartItem format for parent component
      const parts: AssetPartItem[] = this.cart.map((c) => ({
        asset_id: 0,
        part_id: c.part.id,
        qty: c.qty,
        unit_cost: c.unit_cost || c.part.unit_cost || null,
        part: {
          id: c.part.id,
          name: c.part.name,
          uom: c.part.uom || 'each',
          part_number: c.part.part_number,
          unit_cost: c.part.unit_cost
        },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }));
      
      console.log('Modal: Emitting parts to parent:', parts);
      this.toastService.success(`${parts.length} part${parts.length !== 1 ? 's' : ''} added to asset`);
      this.saved.emit(parts);
      // Use setTimeout to ensure event is processed before closing
      setTimeout(() => {
        this.reset();
        this.closed.emit();
      }, 100);
      return;
    }

    // Existing asset - save via API
    const payload = this.cart.map((c) => ({ 
      part_id: c.part.id, 
      qty: c.qty
    }));
    this.loading = true;
    this.assetService.addAssetParts(this.assetId, payload).subscribe({
      next: (items) => {
        this.loading = false;
        this.toastService.success('Parts added to asset successfully');
        this.saved.emit(items);
        this.reset();
        this.closed.emit();
      },
      error: (error) => {
        this.loading = false;
        const errorMsg = error?.error?.message || 'Failed to add parts to asset';
        this.toastService.error(errorMsg);
      }
    });
  }

  reset(): void {
    this.cart = [];
    this.query = '';
    this.results = [];
  }

  close(): void { 
    this.reset();
    this.closed.emit(); 
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen'] && this.isOpen) {
      if (this.results.length === 0 && !this.loading && this.query.length >= 2) {
        this.search();
      }
    }
  }
}

