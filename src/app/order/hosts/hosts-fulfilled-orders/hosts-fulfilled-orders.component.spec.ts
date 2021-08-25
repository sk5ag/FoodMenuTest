import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostsFulfilledOrdersComponent } from './hosts-fulfilled-orders.component';

describe('HostsFulfilledOrdersComponent', () => {
  let component: HostsFulfilledOrdersComponent;
  let fixture: ComponentFixture<HostsFulfilledOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostsFulfilledOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostsFulfilledOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
