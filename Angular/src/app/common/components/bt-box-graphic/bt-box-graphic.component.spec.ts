import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtBoxGraphicComponent } from './bt-box-graphic.component';

describe('BtBoxGraphicComponent', () => {
  let component: BtBoxGraphicComponent;
  let fixture: ComponentFixture<BtBoxGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtBoxGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtBoxGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
