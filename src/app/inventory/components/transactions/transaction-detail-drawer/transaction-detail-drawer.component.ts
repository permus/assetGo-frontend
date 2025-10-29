import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';
import { InventoryTransaction } from '../../../../core/services/inventory-analytics.service';

@Component({
  selector: 'app-transaction-detail-drawer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-detail-drawer.component.html',
  styleUrls: ['./transaction-detail-drawer.component.scss']
})
export class TransactionDetailDrawerComponent implements OnInit {
  @Input() isOpen = false;
  @Input() selectedTransaction: InventoryTransaction | null = null;
  @Output() closeDrawer = new EventEmitter<void>();
  @Output() reverseTransaction = new EventEmitter<InventoryTransaction>();

  canReverse = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.checkPermissions();
  }

  checkPermissions(): void {
    const user = this.authService.getCurrentUser();
    this.canReverse = user?.user_type === 'manager' || user?.user_type === 'admin';
  }

  onClose(): void {
    this.closeDrawer.emit();
  }

  onReverseTransaction(): void {
    if (this.selectedTransaction && this.canReverse) {
      this.reverseTransaction.emit(this.selectedTransaction);
    }
  }

  onBackdropClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }

  getTransactionTypeLabel(type: string): string {
    const typeMap: { [key: string]: string } = {
      'receipt': 'Receipt',
      'issue': 'Issue',
      'adjustment': 'Adjustment',
      'transfer_out': 'Transfer Out',
      'transfer_in': 'Transfer In',
      'return': 'Return'
    };
    return typeMap[type] || type;
  }

  getTransactionTypeClass(type: string): string {
    const classMap: { [key: string]: string } = {
      'receipt': 'type-receipt',
      'issue': 'type-issue',
      'adjustment': 'type-adjustment',
      'transfer_out': 'type-transfer-out',
      'transfer_in': 'type-transfer-in',
      'return': 'type-return'
    };
    return classMap[type] || 'type-default';
  }
}
