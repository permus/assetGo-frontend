import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PendingTransferApprovalsComponent } from './components/pending-transfer-approvals/pending-transfer-approvals.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PendingTransferApprovalsComponent
  ]
})
export class DashboardModule { }