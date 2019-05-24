import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BTCommonModule } from '../common/common.module';
import { BtCommunityViewComponent } from './view/bt-community-view/bt-community-view.component';
import { BtBoxCommunityComponent } from './components/bt-box-community/bt-box-community.component';
import { BtBodyCommunityComponent } from './components/bt-body-community/bt-body-community.component';

@NgModule({
  declarations: [
  BtCommunityViewComponent, 
  BtBoxCommunityComponent, BtBodyCommunityComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BTCommunityModule { }
