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
      }
    ]
  },
  // Template download routes
  { path: 'templates/asset-import', redirectTo: '/assets/asset-import-template.csv' },
  { path: 'templates/asset-import.csv', redirectTo: '/assets/asset-import-template.csv' },
  { path: 'templates/asset-import.xlsx', redirectTo: '/assets/asset-import-template.xlsx' },
  { path: '**', redirectTo: '' }
];
