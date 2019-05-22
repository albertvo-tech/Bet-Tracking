import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BTCommonModule } from './common/common.module';
import { BTCoreModule } from './core/core.module';
import { BTHomeModule } from './home/home.module';
import { NotifyModule } from './notify/notify.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BTCommonModule,
    BTCoreModule,
    BTHomeModule,
    NotifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
