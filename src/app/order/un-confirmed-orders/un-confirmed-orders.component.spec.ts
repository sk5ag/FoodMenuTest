import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnConfirmedOrdersComponent } from './un-confirmed-orders.component';

describe('UnConfirmedOrdersComponent', () => {
  let component: UnConfirmedOrdersComponent;
  let fixture: ComponentFixture<UnConfirmedOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnConfirmedOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnConfirmedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
