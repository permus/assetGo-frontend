import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './shared/components/layout/layout.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  // Public asset view route (no authentication required)
  {
    path: 'public/asset/:id',
    loadComponent: () => import('./assets/components/public-asset-view/public-asset-view.component').then(m => m.PublicAssetViewComponent)
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'locations',
        loadChildren: () => import('./locations/locations.module').then(m => m.LocationsModule)
      },
      {
        path: 'assets',
        loadChildren: () => import('./assets/assets.module').then(m => m.AssetsModule)
      },
      {
        path: 'roles',
        loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule)
      },
      {
        path: 'teams',
        loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule)
      },
      {
        path: 'work-orders',
        loadChildren: () => import('./work-orders/work-orders.module').then(m => m.WorkOrdersModule)
      },
      {
        path: 'inventory',
        loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule)
      }
    ]
  },
  // Template download routes
  { path: 'templates/asset-import', redirectTo: '/assets/asset-import-template.csv' },
  { path: 'templates/asset-import.csv', redirectTo: '/assets/asset-import-template.csv' },
  { path: 'templates/asset-import.xlsx', redirectTo: '/assets/asset-import-template.xlsx' },
  { path: '**', redirectTo: '' }
];
