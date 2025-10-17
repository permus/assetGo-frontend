import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { WorkOrderPartItem, WorkOrderService } from '../../services/work-order.service';
import { InventoryAnalyticsService, InventoryPart, PartsCatalogResponse } from '../../../core/services/inventory-analytics.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-add-work-order-parts-modal',
  standalone: false,
  templateUrl: './add-work-order-parts-modal.component.html',
  styleUrls: ['./add-work-order-parts-modal.component.scss']
})
export class AddWorkOrderPartsModalComponent implements OnChanges {
  @Input() workOrderId!: number;
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();
  @Output() saved = new EventEmitter<WorkOrderPartItem[]>();

  query = '';
  results: InventoryPart[] = [] as any;
  cart: Array<{ part: InventoryPart; qty: number; unit_cost?: number }> = [];
  loading = false;

  constructor(
    private woService: WorkOrderService, 
    private inv: InventoryAnalyticsService,
    private toastService: ToastService
  ) {}

  search(): void {
    this.loading = true;
    this.inv.getPartsCatalog(this.query || undefined, undefined, 1, 10).subscribe({
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

  addToCart(part: InventoryPart): void {
    const existing = this.cart.find((c) => c.part.id === part.id);
    if (existing) {
      existing.qty += 1;
      this.toastService.success('Part quantity updated');
      return;
    }
    this.cart.push({ part, qty: 1, unit_cost: part.unit_cost || undefined });
    this.toastService.success('Part added to cart');
  }

  removeFromCart(partId: number): void {
    this.cart = this.cart.filter((c) => c.part.id !== partId);
    this.toastService.success('Part removed from cart');
  }

  async save(): Promise<void> {
    if (!this.workOrderId || this.cart.length === 0) {
      this.closed.emit();
      return;
    }
    const payload = this.cart.map((c) => ({ part_id: c.part.id, qty: c.qty, unit_cost: c.unit_cost }));
    this.woService.addParts(this.workOrderId, payload).subscribe({
      next: (items) => {
        this.toastService.success('Parts added to work order successfully');
        this.saved.emit(items);
        this.closed.emit();
      },
      error: () => {
        this.toastService.error('Failed to add parts to work order');
      }
    });
  }

  close(): void { this.closed.emit(); }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen'] && this.isOpen && this.results.length === 0 && !this.loading) {
      this.search();
    }
  }
}


