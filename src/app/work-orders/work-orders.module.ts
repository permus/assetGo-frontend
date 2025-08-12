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

@NgModule({
  declarations: [
    WorkOrdersComponent,
    WorkOrderListComponent,
    WorkOrderCardComponent,
    WorkOrderFiltersComponent,
    WorkOrderStatsComponent,
    WorkOrderPreviewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    WorkOrdersRoutingModule
  ]
})
export class WorkOrdersModule { }
