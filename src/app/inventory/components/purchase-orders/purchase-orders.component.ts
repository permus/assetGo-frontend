import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePurchaseOrderModalComponent } from '../create-purchase-order-modal/create-purchase-order-modal.component';

@Component({
  selector: 'app-purchase-orders',
  standalone: true,
  imports: [CommonModule, CreatePurchaseOrderModalComponent],
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.scss']
})
export class PurchaseOrdersComponent {
  showCreatePOModal = false;

  openCreatePOModal(): void {
    this.showCreatePOModal = true;
  }

  closeCreatePOModal(): void {
    this.showCreatePOModal = false;
  }

  onCreatePurchaseOrder(poData: any): void {
    console.log('New Purchase Order data:', poData);
    // Logic to handle PO creation
    this.closeCreatePOModal();
  }
}
