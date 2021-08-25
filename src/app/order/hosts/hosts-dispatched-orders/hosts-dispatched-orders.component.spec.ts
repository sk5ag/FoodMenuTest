import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostsDispatchedOrdersComponent } from './hosts-dispatched-orders.component';

describe('HostsDispatchedOrdersComponent', () => {
  let component: HostsDispatchedOrdersComponent;
  let fixture: ComponentFixture<HostsDispatchedOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostsDispatchedOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostsDispatchedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
