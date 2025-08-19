import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WorkOrdersRoutingModule } from './work-orders-routing.module';
import { WorkOrdersComponent } from './work-orders.component';
import { 
  WorkOrderListComponent,
  WorkOrderCardComponent,
  WorkOrderFiltersComponent,
  WorkOrderStatsComponent,
  WorkOrderPreviewComponent
} from './components';
import { WorkOrderAnalyticsComponent } from './components/work-order-analytics/work-order-analytics.component';
import { EditWorkOrderModalComponent } from './components/edit-work-order-modal/edit-work-order-modal.component';
import { DeleteConfirmationModalComponent } from '../assets/components/delete-confirmation-modal/delete-confirmation-modal.component';
import { AddWorkOrderPartsModalComponent } from './components/add-work-order-parts-modal/add-work-order-parts-modal.component';
import { ViewCostsModalComponent } from './components/view-costs-modal/view-costs-modal.component';

@NgModule({
  declarations: [
    WorkOrdersComponent,
    WorkOrderListComponent,
    WorkOrderCardComponent,
    WorkOrderFiltersComponent,
    WorkOrderStatsComponent,
    WorkOrderPreviewComponent,
    EditWorkOrderModalComponent,
    AddWorkOrderPartsModalComponent,
    ViewCostsModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    WorkOrdersRoutingModule,
    WorkOrderAnalyticsComponent,
    DeleteConfirmationModalComponent
  ]
})
export class WorkOrdersModule { }
