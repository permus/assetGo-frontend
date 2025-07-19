import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './locations.component';
import { LocationViewComponent } from './components/location-view/location-view.component';

const routes: Routes = [
  { path: '', component: LocationsComponent },
  { path: ':id', component: LocationViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }