import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtVerificationComponent } from './bt-verification.component';

describe('BtVerificationComponent', () => {
  let component: BtVerificationComponent;
  let fixture: ComponentFixture<BtVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
