import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnconfirmedOrderItemsComponent } from './unconfirmed-order-items.component';

describe('UnconfirmedOrderItemsComponent', () => {
  let component: UnconfirmedOrderItemsComponent;
  let fixture: ComponentFixture<UnconfirmedOrderItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnconfirmedOrderItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnconfirmedOrderItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
