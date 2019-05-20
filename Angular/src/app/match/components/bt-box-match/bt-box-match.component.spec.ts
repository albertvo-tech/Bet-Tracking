import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtBoxMatchComponent } from './bt-box-match.component';

describe('BtBoxMatchComponent', () => {
  let component: BtBoxMatchComponent;
  let fixture: ComponentFixture<BtBoxMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtBoxMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtBoxMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
