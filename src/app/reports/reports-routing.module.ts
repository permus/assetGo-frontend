import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsPage } from './pages/reports.page';

const routes: Routes = [
  {
    path: '',
    component: ReportsPage,
    data: {
      title: 'Reports',
      breadcrumb: 'Reports'
    }
  },
  {
    path: 'assets',
    component: ReportsPage,
    data: {
      title: 'Asset Reports',
      breadcrumb: 'Asset Reports',
      category: 'assets'
    }
  },
  {
    path: 'maintenance',
    component: ReportsPage,
    data: {
      title: 'Maintenance Reports',
      breadcrumb: 'Maintenance Reports',
      category: 'maintenance'
    }
  },
  {
    path: 'inventory',
    component: ReportsPage,
    data: {
      title: 'Inventory Reports',
      breadcrumb: 'Inventory Reports',
      category: 'inventory'
    }
  },
  {
    path: 'financial',
    component: ReportsPage,
    data: {
      title: 'Financial Reports',
      breadcrumb: 'Financial Reports',
      category: 'financial'
    }
  },
  {
    path: 'custom',
    component: ReportsPage,
    data: {
      title: 'Custom Reports',
      breadcrumb: 'Custom Reports',
      category: 'custom'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
