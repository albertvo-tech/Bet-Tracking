import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BtHomeViewComponent } from './home/view/bt-home-view/bt-home-view.component';
import { BtNotifyViewComponent } from './notify/view/bt-notify-view/bt-notify-view.component';

const routes: Routes = [
  { path: '**', component: BtNotifyViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
