import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtLoginComponent } from './bt-login.component';

describe('BtLoginComponent', () => {
  let component: BtLoginComponent;
  let fixture: ComponentFixture<BtLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
