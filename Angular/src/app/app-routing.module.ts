import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BtHomeViewComponent } from './home/view/bt-home-view/bt-home-view.component';
import { BtMatchViewComponent } from './match/view/bt-match-view/bt-match-view.component';
import { BtVerificationViewComponent } from './verification/view/bt-verification-view/bt-verification-view.component';
import { BtNotifyViewComponent } from './notify/view/bt-notify-view/bt-notify-view.component';
import { BtCommunityViewComponent } from './community/view/bt-community-view/bt-community-view.component';

const routes: Routes = [
  { path: 'home', component: BtHomeViewComponent },
  { path: 'notify', component: BtNotifyViewComponent },
  { path: 'verify', component: BtVerificationViewComponent },
  { path: 'community', component: BtCommunityViewComponent },
  { path: 'match', component: BtMatchViewComponent },
  { path: '**', component: BtHomeViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
