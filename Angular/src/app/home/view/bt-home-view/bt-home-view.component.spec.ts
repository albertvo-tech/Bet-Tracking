import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtHomeViewComponent } from './bt-home-view.component';
import { BtVMenuComponent } from 'src/app/common/components/bt-v-menu/bt-v-menu.component';
import { BtHMenuComponent } from 'src/app/common/components/bt-h-menu/bt-h-menu.component';
import { BtLoginComponent } from 'src/app/common/components/bt-login/bt-login.component';
import { BtVMenuItemComponent } from 'src/app/common/components/bt-v-menu-item/bt-v-menu-item.component';
import { BtHMenuItemComponent } from 'src/app/common/components/bt-h-menu-item/bt-h-menu-item.component';

describe('BtHomeViewComponent', () => {
  let component: BtHomeViewComponent;
  let fixture: ComponentFixture<BtHomeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        BtHomeViewComponent,
        BtVMenuComponent,
        BtHMenuComponent,
        BtLoginComponent,
        BtVMenuItemComponent,
        BtHMenuItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtHomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
