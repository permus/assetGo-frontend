import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';

@NgModule({
  declarations: [
    LocationsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LocationsRoutingModule
  ]
})
export class LocationsModule { }