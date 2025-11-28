import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlaComponent } from './sla.component';

const routes: Routes = [
  {
    path: '',
    component: SlaComponent,
    children: [
      { path: '', redirectTo: 'rules', pathMatch: 'full' },
      {
        path: 'rules',
        loadComponent: () => import('./pages/sla-rules-page.component').then(m => m.SlaRulesPageComponent),
        title: 'SLA Management — Rules'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/sla-dashboard-page.component').then(m => m.SlaDashboardPageComponent),
        title: 'SLA Management — Dashboard'
      },
      {
        path: 'active',
        loadComponent: () => import('./pages/sla-active-page.component').then(m => m.SlaActivePageComponent),
        title: 'SLA Management — Active SLAs'
      },
      {
        path: 'reports',
        loadComponent: () => import('./pages/sla-reports-page.component').then(m => m.SlaReportsPageComponent),
        title: 'SLA Management — Reports'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlaRoutingModule {}

