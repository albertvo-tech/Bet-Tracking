import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtNotifyViewComponent } from './view/bt-notify-view/bt-notify-view.component';
import { BtNotifyComponent } from './components/bt-notify/bt-notify.component';
import { BTCommonModule } from '../common/common.module';
import { BtNotifyFormComponent } from './components/bt-notify-form/bt-notify-form.component';
import { BtBoxFormComponent } from './components/bt-box-form/bt-box-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BtNotifyViewComponent, 
    BtNotifyComponent, 
    BtNotifyFormComponent, BtBoxFormComponent
  ],
  imports: [
    CommonModule,
    BTCommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    BtNotifyViewComponent
  ]
})
export class NotifyModule { }
