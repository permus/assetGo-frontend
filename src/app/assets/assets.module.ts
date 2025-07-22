import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsRoutingModule } from './assets-routing.module';
import { AssetListComponent } from './asset-list/asset-list.component';

@NgModule({
  imports: [CommonModule, AssetsRoutingModule, AssetListComponent],
})
export class AssetsModule {} 