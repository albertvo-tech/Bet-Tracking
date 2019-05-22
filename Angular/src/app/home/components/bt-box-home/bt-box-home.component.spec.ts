import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtBoxHomeComponent } from './bt-box-home.component';

describe('BtBoxHomeComponent', () => {
  let component: BtBoxHomeComponent;
  let fixture: ComponentFixture<BtBoxHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtBoxHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtBoxHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
