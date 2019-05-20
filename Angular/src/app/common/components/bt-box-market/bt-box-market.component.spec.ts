import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtBoxMarketComponent } from './bt-box-market.component';

describe('BtBoxMarketComponent', () => {
  let component: BtBoxMarketComponent;
  let fixture: ComponentFixture<BtBoxMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtBoxMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtBoxMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
