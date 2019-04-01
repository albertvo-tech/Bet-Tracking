import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtHomeBodyComponent } from './bt-home-body.component';

describe('BtHomeBodyComponent', () => {
  let component: BtHomeBodyComponent;
  let fixture: ComponentFixture<BtHomeBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtHomeBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtHomeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
