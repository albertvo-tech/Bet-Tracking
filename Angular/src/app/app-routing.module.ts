import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BtHomeViewComponent } from './home/view/bt-home-view/bt-home-view.component';
import { BtMatchViewComponent } from './match/view/bt-match-view/bt-match-view.component';
import { BtVerificationViewComponent } from './verification/view/bt-verification-view/bt-verification-view.component';

const routes: Routes = [
  { path: 'home', component: BtHomeViewComponent },
  //{ path: 'notify', component: BtHomeViewComponent },
  { path: 'verify', component: BtVerificationViewComponent },
  //{ path: 'community', component: BtHomeViewComponent },
  { path: 'match', component: BtMatchViewComponent },
  { path: '**', component: BtHomeViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
