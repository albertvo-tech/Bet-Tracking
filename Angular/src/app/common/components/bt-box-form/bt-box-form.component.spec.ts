import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtBoxFormComponent } from './bt-box-form.component';

describe('BtBoxFormComponent', () => {
  let component: BtBoxFormComponent;
  let fixture: ComponentFixture<BtBoxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtBoxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtBoxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
