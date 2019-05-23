import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtVerificationViewComponent } from "./bt-verification-view.component";

describe('BtVerificationViewComponent', () => {
  let component: BtVerificationViewComponent;
  let fixture: ComponentFixture<BtVerificationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtVerificationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtVerificationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
