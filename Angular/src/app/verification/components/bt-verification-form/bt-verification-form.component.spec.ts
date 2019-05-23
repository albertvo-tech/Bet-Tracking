import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtVerificationFormComponent } from './bt-Verification-form.component';

describe('BtVerificationFormComponent', () => {
  let component: BtVerificationFormComponent;
  let fixture: ComponentFixture<BtVerificationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtVerificationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtVerificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
