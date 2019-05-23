import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BTCommonModule } from '../common/common.module';
import { BtVerificationViewComponent } from './view/bt-verification-view/bt-verification-view.component';
import { BtVerificationComponent } from './components/bt-verification/bt-verification.component';

@NgModule({
  declarations: [
    BtVerificationViewComponent,
    BtVerificationComponent
  ],
  imports: [
    CommonModule,
    BTCommonModule
  ],
  exports: [
  ]
})
export class BTVerificationModule { }