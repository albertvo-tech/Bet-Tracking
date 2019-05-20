import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtBoxChartComponent } from './bt-box-chart.component';

describe('BtBoxChartComponent', () => {
  let component: BtBoxChartComponent;
  let fixture: ComponentFixture<BtBoxChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtBoxChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtBoxChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
