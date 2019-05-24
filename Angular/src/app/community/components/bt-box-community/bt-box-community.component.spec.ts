import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtBoxCommunityComponent } from './bt-box-community.component';

describe('BtBoxCommunityComponent', () => {
  let component: BtBoxCommunityComponent;
  let fixture: ComponentFixture<BtBoxCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtBoxCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtBoxCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
