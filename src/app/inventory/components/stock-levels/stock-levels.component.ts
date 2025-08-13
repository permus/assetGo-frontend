import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockAdjustmentModalComponent } from '../stock-adjustment-modal/stock-adjustment-modal.component';

@Component({
  selector: 'app-stock-levels',
  standalone: true,
  imports: [CommonModule, StockAdjustmentModalComponent],
  templateUrl: './stock-levels.component.html',
  styleUrls: ['./stock-levels.component.scss']
})
export class StockLevelsComponent {
  showStockAdjustmentModal = false;

  openStockAdjustmentModal(): void {
    this.showStockAdjustmentModal = true;
  }

  closeStockAdjustmentModal(): void {
    this.showStockAdjustmentModal = false;
  }

  onStockAdjustment(adjustmentData: any): void {
    console.log('Stock adjustment data:', adjustmentData);
    // Logic to handle stock adjustment
    this.closeStockAdjustmentModal();
  }
}
