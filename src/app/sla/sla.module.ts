import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlaRoutingModule } from './sla-routing.module';
import { SlaComponent } from './sla.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    SlaRoutingModule,
    SlaComponent,
  ],
})
export class SlaModule {}

