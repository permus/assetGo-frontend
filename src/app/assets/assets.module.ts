import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsRoutingModule } from './assets-routing.module';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetViewComponent } from './components/asset-view/asset-view.component';
import { AssetEditComponent } from './components/asset-edit/asset-edit.component';
import { SmartImportComponent } from './components/smart-import/smart-import.component';
import { TransferAssetModalComponent } from './components/transfer-asset-modal/transfer-asset-modal.component';

@NgModule({
  imports: [CommonModule, AssetsRoutingModule, AssetListComponent, AssetViewComponent, AssetEditComponent, SmartImportComponent, TransferAssetModalComponent],
})
export class AssetsModule {} 