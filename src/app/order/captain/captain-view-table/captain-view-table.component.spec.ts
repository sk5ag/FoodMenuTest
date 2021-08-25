import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptainViewTableComponent } from './captain-view-table.component';

describe('CaptainViewTableComponent', () => {
  let component: CaptainViewTableComponent;
  let fixture: ComponentFixture<CaptainViewTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptainViewTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptainViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
