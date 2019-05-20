import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BtHomeViewComponent } from './home/view/bt-home-view/bt-home-view.component';
import { BtMatchViewComponent } from './match/view/bt-match-view/bt-match-view.component';

const routes: Routes = [
  { path: '**', component: BtMatchViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
