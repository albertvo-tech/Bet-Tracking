import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtCommunityViewComponent } from './bt-community-view.component';

describe('BtCommunityViewComponent', () => {
  let component: BtCommunityViewComponent;
  let fixture: ComponentFixture<BtCommunityViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtCommunityViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtCommunityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
