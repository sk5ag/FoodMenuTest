import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptainCloseTableComponent } from './captain-close-table.component';

describe('CaptainCloseTableComponent', () => {
  let component: CaptainCloseTableComponent;
  let fixture: ComponentFixture<CaptainCloseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptainCloseTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptainCloseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
