import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtHomeViewComponent } from './view/bt-home-view/bt-home-view.component';
import { BTCommonModule } from '../common/common.module';
import { BtBoxHomeComponent } from './components/bt-box-home/bt-box-home.component';

@NgModule({
  declarations: [
    BtHomeViewComponent,
    BtBoxHomeComponent
  ],
  imports: [
    CommonModule,
    BTCommonModule
  ],
  exports: [
    BtHomeViewComponent
  ]
})
export class BTHomeModule { }
