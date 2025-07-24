import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsRoutingModule } from './assets-routing.module';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetViewComponent } from './components/asset-view/asset-view.component';

@NgModule({
  imports: [CommonModule, AssetsRoutingModule, AssetListComponent, AssetViewComponent],
})
export class AssetsModule {} 