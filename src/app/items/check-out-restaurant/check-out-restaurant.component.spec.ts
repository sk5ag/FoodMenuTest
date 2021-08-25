import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutRestaurantComponent } from './check-out-restaurant.component';

describe('CheckOutRestaurantComponent', () => {
  let component: CheckOutRestaurantComponent;
  let fixture: ComponentFixture<CheckOutRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOutRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
