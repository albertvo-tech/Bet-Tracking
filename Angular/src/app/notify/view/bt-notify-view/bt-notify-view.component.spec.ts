import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtNotifyViewComponent } from './bt-notify-view.component';

describe('BtNotifyViewComponent', () => {
  let component: BtNotifyViewComponent;
  let fixture: ComponentFixture<BtNotifyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtNotifyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtNotifyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
