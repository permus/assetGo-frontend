import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetCreateComponent } from './asset-list/asset-create.component';

const routes: Routes = [
  { path: '', component: AssetListComponent },
  { path: 'create', component: AssetCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule {} 