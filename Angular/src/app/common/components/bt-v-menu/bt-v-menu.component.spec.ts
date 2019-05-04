import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtVMenuComponent } from './bt-v-menu.component';

describe('BtVMenuComponent', () => {
  let component: BtVMenuComponent;
  let fixture: ComponentFixture<BtVMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        BtVMenuComponent
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtVMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
