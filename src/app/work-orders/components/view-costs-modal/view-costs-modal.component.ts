import { Component, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { WorkOrderService, WorkOrderPartItem, TimeLog } from '../../services/work-order.service';
import { CurrencyService } from '../../../core/services/currency.service';

@Component({
  selector: 'app-view-costs-modal',
  standalone: false,
  templateUrl: './view-costs-modal.component.html',
  styleUrls: ['./view-costs-modal.component.scss']
})
export class ViewCostsModalComponent implements OnChanges {
  @Input() workOrderId!: number;
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  loading = false;
  timeLogs: TimeLog[] = [];
  parts: WorkOrderPartItem[] = [];
  laborMinutes = 0;
  laborCost = 0;
  partsCost = 0;
  totalCost = 0;

  constructor(private woService: WorkOrderService, private currencyService: CurrencyService) {}

  getCurrencySymbol(): string {
    return this.currencyService.getSymbol();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen'] && this.isOpen && this.workOrderId) {
      this.fetchCosts();
    }
  }

  fetchCosts(): void {
    this.loading = true;
    const id = this.workOrderId;
    this.woService.getTimeLogs(id).subscribe({
      next: (data) => {
        this.timeLogs = data.logs || [];
        this.laborMinutes = data.totals?.total_minutes || 0;
        this.laborCost = data.totals?.total_cost || 0;
        this.computeTotals();
      }
    });
    this.woService.getParts(id).subscribe({
      next: (items) => {
        this.parts = items || [];
        this.computeTotals();
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  private computeTotals(): void {
    this.partsCost = (this.parts || []).reduce((sum, p) => {
      const unit = (p.unit_cost ?? 0) as number;
      const qty = (p.qty ?? 0) as unknown as number;
      return sum + unit * qty;
    }, 0);
    this.totalCost = (this.laborCost || 0) + (this.partsCost || 0);
  }

  close(): void { this.closed.emit(); }
}


