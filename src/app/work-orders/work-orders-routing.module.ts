import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkOrdersComponent } from './work-orders.component';
import { WorkOrderPreviewComponent } from './components/work-order-preview/work-order-preview.component';

const routes: Routes = [
  {
    path: '',
    component: WorkOrdersComponent
  },
  {
    path: ':id',
    component: WorkOrderPreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkOrdersRoutingModule { }
