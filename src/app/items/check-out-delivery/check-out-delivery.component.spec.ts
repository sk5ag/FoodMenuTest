import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutDeliveryComponent } from './check-out-delivery.component';

describe('CheckOutDeliveryComponent', () => {
  let component: CheckOutDeliveryComponent;
  let fixture: ComponentFixture<CheckOutDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOutDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
