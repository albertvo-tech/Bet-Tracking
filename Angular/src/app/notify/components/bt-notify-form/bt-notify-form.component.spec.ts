import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtNotifyFormComponent } from './bt-notify-form.component';

describe('BtNotifyFormComponent', () => {
  let component: BtNotifyFormComponent;
  let fixture: ComponentFixture<BtNotifyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtNotifyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtNotifyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
