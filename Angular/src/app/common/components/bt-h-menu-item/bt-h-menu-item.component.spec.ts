import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtHMenuItemComponent } from './bt-h-menu-item.component';

describe('BtHMenuItemComponent', () => {
  let component: BtHMenuItemComponent;
  let fixture: ComponentFixture<BtHMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtHMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtHMenuItemComponent);
    component = fixture.componentInstance;
    component.item = {
      'name':'Test'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
