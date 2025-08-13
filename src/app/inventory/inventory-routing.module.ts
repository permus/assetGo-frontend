import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./components/inventory-dashboard/inventory-dashboard.component').then(m => m.InventoryDashboardComponent),
        children: [
          {
            path: '',
            redirectTo: 'overview',
            pathMatch: 'full'
          },
          {
            path: 'overview',
            loadComponent: () => import('./components/dashboard-overview/dashboard-overview.component').then(m => m.DashboardOverviewComponent)
          },
          {
            path: 'automation',
            loadComponent: () => import('./components/dashboard-automation/dashboard-automation.component').then(m => m.DashboardAutomationComponent)
          },
          {
            path: 'alerts',
            loadComponent: () => import('./components/dashboard-alerts/dashboard-alerts.component').then(m => m.DashboardAlertsComponent)
          }
        ]
      },
      {
        path: 'parts-catalog',
        loadComponent: () => import('./components/parts-catalog/parts-catalog.component').then(m => m.PartsCatalogComponent)
      },
      {
        path: 'stock-levels',
        loadComponent: () => import('./components/stock-levels/stock-levels.component').then(m => m.StockLevelsComponent)
      },
      {
        path: 'transactions',
        loadComponent: () => import('./components/transactions/transactions.component').then(m => m.TransactionsComponent)
      },
      {
        path: 'purchase-orders',
        loadComponent: () => import('./components/purchase-orders/purchase-orders.component').then(m => m.PurchaseOrdersComponent)
      },
      {
        path: 'abc-analysis',
        loadComponent: () => import('./components/abc-analysis/abc-analysis.component').then(m => m.AbcAnalysisComponent)
      },
      {
        path: 'analytics',
        loadComponent: () => import('./components/analytics/analytics.component').then(m => m.AnalyticsComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
