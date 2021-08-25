import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostsConfirmedOrdersComponent } from './hosts-confirmed-orders.component';

describe('HostsConfirmedOrdersComponent', () => {
  let component: HostsConfirmedOrdersComponent;
  let fixture: ComponentFixture<HostsConfirmedOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostsConfirmedOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostsConfirmedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
