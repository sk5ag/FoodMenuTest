import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostsInprogressOrdersComponent } from './hosts-inprogress-orders.component';

describe('HostsInprogressOrdersComponent', () => {
  let component: HostsInprogressOrdersComponent;
  let fixture: ComponentFixture<HostsInprogressOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostsInprogressOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostsInprogressOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
