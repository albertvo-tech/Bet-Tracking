import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BTCommonModule } from './common/common.module';
import { BTCoreModule } from './core/core.module';
import { BTHomeModule } from './home/home.module';
import { BTMatchModule } from './match/match.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { BTVerificationModule } from './verification/verification.module';
import { NotifyModule } from './notify/notify.module';
import { BTCommunityModule } from './community/community.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    GoogleChartsModule,
    BrowserModule,
    AppRoutingModule,
    BTCommonModule,
    BTCoreModule,
    BTHomeModule,
    BTMatchModule,
    BTVerificationModule,
    NotifyModule,
    BTCommunityModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
