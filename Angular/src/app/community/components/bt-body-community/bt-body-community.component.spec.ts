import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtBodyCommunityComponent } from './bt-body-community.component';

describe('BtBodyCommunityComponent', () => {
  let component: BtBodyCommunityComponent;
  let fixture: ComponentFixture<BtBodyCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtBodyCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtBodyCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
