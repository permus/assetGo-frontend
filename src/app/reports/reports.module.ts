import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Services
import { ReportsApiService } from './services/reports-api.service';
import { ExportService } from './services/export.service';

// Routing
import { ReportsRoutingModule } from './reports-routing.module';

// Models
export * from './models/reports.models';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReportsRoutingModule
  ],
  providers: [
    ReportsApiService,
    ExportService
  ]
})
export class ReportsModule { }
