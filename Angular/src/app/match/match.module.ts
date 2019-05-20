import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BTCommonModule } from '../common/common.module';
import { BtMatchViewComponent } from './view/bt-match-view/bt-match-view.component';
import { BtBoxMatchComponent } from './components/bt-box-match/bt-box-match.component';

@NgModule({
  declarations: [
    BtMatchViewComponent,
    BtBoxMatchComponent
  ],
  imports: [
    CommonModule,
    BTCommonModule
  ],
  exports: [
  ]
})
export class BTMatchModule { }
