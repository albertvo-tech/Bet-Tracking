import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtMatchViewComponent } from './bt-match-view.component';
import { BtVMenuComponent } from 'src/app/common/components/bt-v-menu/bt-v-menu.component';
import { BtHMenuComponent } from 'src/app/common/components/bt-h-menu/bt-h-menu.component';
import { BtLoginComponent } from 'src/app/common/components/bt-login/bt-login.component';
import { BtHMenuItemComponent } from 'src/app/common/components/bt-h-menu-item/bt-h-menu-item.component';

describe('BtMatchViewComponent', () => {
  let component: BtMatchViewComponent;
  let fixture: ComponentFixture<BtMatchViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        BtMatchViewComponent,
        BtVMenuComponent,
        BtHMenuComponent,
        BtLoginComponent,
        BtHMenuItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtMatchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
