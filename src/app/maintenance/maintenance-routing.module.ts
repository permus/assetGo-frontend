import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MaintenanceComponent} from './maintenance.component';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceComponent,
    children: [
      {path: '', redirectTo: 'plans', pathMatch: 'full'},
      {
        path: 'plans',
        loadComponent: () => import('./pages/plans-page.component').then(m => m.PlansPageComponent),
        title: 'Preventive Maintenance — Plans'
      },
      {
        path: 'scheduled',
        loadComponent: () => import('./pages/scheduled-page.component').then(m => m.ScheduledPageComponent),
        title: 'Preventive Maintenance — Scheduled'
      },

      {
        path: 'ppm-gantt',
        loadComponent: () => import('./pages/gantt-page.component').then(m => m.GanttPageComponent),
        title: 'Preventive Maintenance — PPM Gantt'
      },
      {
        path: 'inspections',
        loadComponent: () => import('./pages/inspections-page.component').then(m => m.InspectionsPageComponent),
        title: 'Preventive Maintenance — Inspections'
      },
      {
        path: 'history',
        loadComponent: () => import('./pages/history-page.component').then(m => m.HistoryPageComponent),
        title: 'Preventive Maintenance — History'
      },
      {
        path: 'analytics',
        loadComponent: () => import('./pages/analytics-page.component').then(m => m.AnalyticsPageComponent),
        title: 'Preventive Maintenance — Analytics'
      },
    ]
  },

  {
    path: 'plans/:id',
    loadComponent: () => import('./pages/plan-preview-page/plan-preview-page.component').then(m => m.PlanPreviewPageComponent),
    title: 'Maintenance Plan Preview'
  },

  {
    path: 'scheduled/:id',
    loadComponent: () => import('./pages/schedule-preview-page/schedule-preview-page.component').then(m => m.SchedulePreviewPageComponent),
    title: 'Maintenance Schedule Preview'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule {
}


