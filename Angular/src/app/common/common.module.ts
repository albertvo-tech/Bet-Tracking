import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtVMenuComponent } from './components/bt-v-menu/bt-v-menu.component';
import { BtHMenuComponent } from './components/bt-h-menu/bt-h-menu.component';
import { BtLoginComponent } from './components/bt-login/bt-login.component';
import { BtHMenuItemComponent } from './components/bt-h-menu-item/bt-h-menu-item.component';
import { BtInputComponent } from './components/bt-input/bt-input.component';
import { BtButtonComponent } from './components/bt-button/bt-button.component';

@NgModule({
  declarations: [
    BtVMenuComponent, 
    BtHMenuComponent, 
    BtLoginComponent,
    BtHMenuItemComponent,
    BtInputComponent,
    BtButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BtVMenuComponent, 
    BtHMenuComponent,
    BtLoginComponent,
    BtInputComponent,
    BtButtonComponent

  ]
})
export class BTCommonModule { }
