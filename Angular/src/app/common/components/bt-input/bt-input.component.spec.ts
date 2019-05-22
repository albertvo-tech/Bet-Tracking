import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtInputComponent } from './bt-input.component';

describe('BtInputComponent', () => {
  let component: BtInputComponent;
  let fixture: ComponentFixture<BtInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
