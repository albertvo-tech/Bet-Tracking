import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BTCommonModule } from '../common/common.module';
import { BtVerificationViewComponent } from './view/bt-verification-view/bt-verification-view.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BtVerificationViewComponent
  ],
  imports: [
    CommonModule,
    BTCommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
  ]
})
export class BTVerificationModule { }