import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtNotifyComponent } from './bt-notify.component';

describe('BtNotifyComponent', () => {
  let component: BtNotifyComponent;
  let fixture: ComponentFixture<BtNotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtNotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
