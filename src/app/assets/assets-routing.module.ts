import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetCreateComponent } from './asset-list/asset-create.component';
import { AssetViewComponent } from './components/asset-view/asset-view.component';
import { AssetEditComponent } from './components/asset-edit/asset-edit.component';
import { SmartImportComponent } from './components/smart-import/smart-import.component';

const routes: Routes = [
  { path: 'list', component: AssetListComponent },
  { path: 'create', component: AssetCreateComponent },
  { path: 'import', component: SmartImportComponent },
  { path: 'preview/:id', component: AssetViewComponent },
  { path: ':id/edit', component: AssetEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule {} 