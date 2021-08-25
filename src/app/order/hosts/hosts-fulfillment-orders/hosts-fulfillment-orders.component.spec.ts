import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostsFulfillmentOrdersComponent } from './hosts-fulfillment-orders.component';

describe('HostsFulfillmentOrdersComponent', () => {
  let component: HostsFulfillmentOrdersComponent;
  let fixture: ComponentFixture<HostsFulfillmentOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostsFulfillmentOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostsFulfillmentOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
