import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtHMenuComponent } from './bt-h-menu.component';

describe('BtHMenuComponent', () => {
  let component: BtHMenuComponent;
  let fixture: ComponentFixture<BtHMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtHMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtHMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
