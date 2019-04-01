import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtHomeViewComponent } from './view/bt-home-view/bt-home-view.component';
import { BTCommonModule } from '../common/common.module';
import { BtHomeBodyComponent } from './components/bt-home-body/bt-home-body.component';

@NgModule({
  declarations: [
    BtHomeViewComponent, 
    BtHomeBodyComponent
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
