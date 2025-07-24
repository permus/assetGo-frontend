import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetCreateComponent } from './asset-list/asset-create.component';
import { AssetViewComponent } from './components/asset-view/asset-view.component';

const routes: Routes = [
  { path: '', component: AssetListComponent },
  { path: 'create', component: AssetCreateComponent },
  { path: ':id', component: AssetViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule {} 