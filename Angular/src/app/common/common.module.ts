import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtVMenuComponent } from './components/bt-v-menu/bt-v-menu.component';
import { BtHMenuComponent } from './components/bt-h-menu/bt-h-menu.component';
import { BtLoginComponent } from './components/bt-login/bt-login.component';
import { BtHMenuItemComponent } from './components/bt-h-menu-item/bt-h-menu-item.component';
import { BtInputComponent } from './components/bt-input/bt-input.component';
import { BtButtonComponent } from './components/bt-button/bt-button.component';
import { BtBoxChartComponent } from './components/bt-box-chart/bt-box-chart.component';
import { BtBoxGraphicComponent } from './components/bt-box-graphic/bt-box-graphic.component';
import { BtBoxMarketComponent } from './components/bt-box-market/bt-box-market.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { BtNotifyComponent } from './components/bt-notify/bt-notify.component';
import { BtBoxFormComponent } from './components/bt-box-form/bt-box-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';

@NgModule({
  declarations: [
    BtVMenuComponent, 
    BtHMenuComponent, 
    BtLoginComponent,
    BtHMenuItemComponent,
    BtInputComponent,
    BtButtonComponent,
    BtBoxChartComponent,
    BtBoxGraphicComponent,
    BtBoxMarketComponent,
    BtNotifyComponent,
    BtBoxFormComponent
  ],
  imports: [
    CommonModule,
    GoogleChartsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule, 
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  exports: [
    BtVMenuComponent, 
    BtHMenuComponent,
    BtLoginComponent,
    BtInputComponent,
    BtButtonComponent,
    BtBoxChartComponent,
    BtBoxGraphicComponent,
    BtBoxMarketComponent,
    BtNotifyComponent,
    BtBoxFormComponent

  ]
})
export class BTCommonModule { }
