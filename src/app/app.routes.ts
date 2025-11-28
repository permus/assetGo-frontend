import {Routes} from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';
import {GuestGuard} from './core/guards/guest.guard';
import {LayoutComponent} from './shared/components/layout/layout.component';
import {SettingsComponent} from './settings/settings.component';
import { moduleGuard } from './core/guards/module.guard';

export const routes: Routes = [
  // Landing page - root path (public, no auth required)
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/landing/landing.component').then(m => m.LandingComponent)
  },
  // Admin routes - must come after landing to avoid conflicts
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  // Auth routes (login, register, etc.) - explicit paths only
  // GuestGuard prevents authenticated users from accessing these pages
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent),
    canActivate: [GuestGuard]
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent),
    canActivate: [GuestGuard]
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./auth/reset-password/reset-password.component').then(m => m.ResetPasswordComponent)
  },
  {
    path: 'activate-account',
    loadComponent: () => import('./auth/activate-account/activate-account.component').then(m => m.ActivateAccountComponent)
  },
  {
    path: 'email/verify/:id/:hash',
    loadComponent: () => import('./auth/activate-account/activate-account.component').then(m => m.ActivateAccountComponent)
  },
  // Public asset view route (no authentication required)
  {
    path: 'public/asset/:id',
    loadComponent: () => import('./assets/components/public-asset-view/public-asset-view.component').then(m => m.PublicAssetViewComponent)
  },
  // Protected application routes - Single LayoutComponent wraps ALL protected routes
  // This ensures only ONE instance of LayoutComponent exists, preventing duplicate Pusher connections
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
        loadChildren: () => import('./locations/locations.module').then(m => m.LocationsModule),
        canActivate: [moduleGuard('locations')]
      },
      {
        path: 'assets',
        loadChildren: () => import('./assets/assets.module').then(m => m.AssetsModule),
        canActivate: [moduleGuard('assets')]
      },
      {
        path: 'roles',
        loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule),
        canActivate: [moduleGuard('roles')]
      },
      {
        path: 'teams',
        loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule),
        canActivate: [moduleGuard('teams')]
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
        path: 'sla',
        loadChildren: () => import('./sla/sla.module').then(m => m.SlaModule),
        canActivate: [moduleGuard('sla')]
      },
      {
        path: 'settings',
        component: SettingsComponent,
        title: 'Settings',
        canActivate: [moduleGuard('settings')]
      },
      {
        path: 'ai',
        children: [
          {
            path: '',
            loadComponent: () => import('./ai-features/ai-features.component').then(m => m.AIFeaturesComponent),
            title: 'AI Features',
            canActivate: [moduleGuard('ai_features')]
          },
          {
            path: 'image-recognition',
            loadComponent: () => import('./ai-features/ai-image-recognition/ai-image-recognition.component').then(m => m.AIImageRecognitionComponent),
            title: 'AI Image Recognition'
          }
        ]
      },
      {
        path: 'reports',
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule),
        canActivate: [moduleGuard('reports')]
      },
      {
        path: 'profile',
        loadComponent: () => import('./profile/pages/profile.page').then(m => m.ProfilePage),
        title: 'Profile Settings'
      }
    ]
  },
  // Template download routes
  {path: 'templates/asset-import', redirectTo: '/assets/asset-import-template.csv'},
  {path: 'templates/asset-import.csv', redirectTo: '/assets/asset-import-template.csv'},
  {path: 'templates/asset-import.xlsx', redirectTo: '/assets/asset-import-template.xlsx'},
  // Default route - redirect to landing
  {path: '**', redirectTo: ''}
];
