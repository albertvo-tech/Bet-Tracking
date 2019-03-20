import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtHomeViewComponent } from './bt-home-view.component';

describe('BtHomeViewComponent', () => {
  let component: BtHomeViewComponent;
  let fixture: ComponentFixture<BtHomeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtHomeViewComponent ]
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
