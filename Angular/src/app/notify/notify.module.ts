import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtNotifyViewComponent } from './view/bt-notify-view/bt-notify-view.component';
import { BTCommonModule } from '../common/common.module';
import { BtNotifyFormComponent } from './components/bt-notify-form/bt-notify-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    BtNotifyViewComponent,
    BtNotifyFormComponent
  ],
  imports: [
    CommonModule,
    BTCommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule, 
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  exports: [
    BtNotifyViewComponent
  ]
})
export class NotifyModule { }
