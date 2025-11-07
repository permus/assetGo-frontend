import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsRoutingModule } from './assets-routing.module';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetViewComponent } from './components/asset-view/asset-view.component';
import { AssetEditComponent } from './components/asset-edit/asset-edit.component';
import { TransferAssetModalComponent } from './components/transfer-asset-modal/transfer-asset-modal.component';
import { SmartImportComponent } from './components/smart-import/smart-import.component';
import { PublicAssetViewComponent } from './components/public-asset-view/public-asset-view.component';
import { DateFormatPipe } from '../core/pipes/date-format.pipe';
import { TimeFormatPipe } from '../core/pipes/time-format.pipe';
import { NumberFormatPipe } from '../core/pipes/number-format.pipe';

@NgModule({
  imports: [CommonModule, AssetsRoutingModule, AssetListComponent, AssetViewComponent, AssetEditComponent, TransferAssetModalComponent, SmartImportComponent, PublicAssetViewComponent, DateFormatPipe, TimeFormatPipe, NumberFormatPipe],
})
export class AssetsModule {} 