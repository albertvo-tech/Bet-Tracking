import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtVMenuComponent } from './components/bt-v-menu/bt-v-menu.component';
import { BtHMenuComponent } from './components/bt-h-menu/bt-h-menu.component';
import { BtLoginComponent } from './components/bt-login/bt-login.component';

@NgModule({
  declarations: [
    BtVMenuComponent, 
    BtHMenuComponent, 
    BtLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BtVMenuComponent, 
    BtHMenuComponent,
    BtLoginComponent
  ]
})
export class BTCommonModule { }
