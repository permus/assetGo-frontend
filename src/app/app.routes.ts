import {Routes} from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';
import {AuthGuard} from './core/guards/auth.guard';
import {LayoutComponent} from './shared/components/layout/layout.component';
import {SettingsComponent} from './settings/settings.component';
import { moduleGuard } from './core/guards/module.guard';

export const routes: Routes = [
  {path: '', component: LandingComponent},
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
        loadChildren: () => import('./assets/assets.module').then(m => m.AssetsModule),
        canActivate: [moduleGuard('assets')]
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
        loadChildren: () => import('./work-orders/work-orders.module').then(m => m.WorkOrdersModule),
        canActivate: [moduleGuard('work_orders')]
      },
      {
        path: 'inventory',
        loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule),
        canActivate: [moduleGuard('inventory')]
      },
      {
        path: 'maintenance',
        loadChildren: () => import('./maintenance/maintenance.module').then(m => m.MaintenanceModule),
        canActivate: [moduleGuard('maintenance')]
      },
      {
        path: 'settings',
        component: SettingsComponent,
        title: 'Settings'
      },
      {
        path: 'ai',
        loadComponent: () => import('./ai-features/ai-features.component').then(m => m.AIFeaturesComponent),
        title: 'AI Features'
      },
      {
        path: 'ai/image-recognition',
        loadComponent: () => import('./ai-features/ai-image-recognition/ai-image-recognition.component').then(m => m.AIImageRecognitionComponent),
        title: 'AI Image Recognition'
      },
      {
        path: 'reports',
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
      }
    ]
  },
  // Template download routes
  {path: 'templates/asset-import', redirectTo: '/assets/asset-import-template.csv'},
  {path: 'templates/asset-import.csv', redirectTo: '/assets/asset-import-template.csv'},
  {path: 'templates/asset-import.xlsx', redirectTo: '/assets/asset-import-template.xlsx'},
  {path: '**', redirectTo: ''}
];
