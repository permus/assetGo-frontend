import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetCreateComponent } from './asset-list/asset-create.component';
import { AssetViewComponent } from './components/asset-view/asset-view.component';
import { AssetEditComponent } from './components/asset-edit/asset-edit.component';
import { AssetEditComponent } from './components/asset-edit/asset-edit.component';

const routes: Routes = [
  { path: '', component: AssetListComponent },
  { path: 'create', component: AssetCreateComponent },
  { path: ':id', component: AssetViewComponent },
  { path: ':id/edit', component: AssetEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule {} 