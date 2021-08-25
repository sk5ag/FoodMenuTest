import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptainOpenTableComponent } from './captain-open-table.component';

describe('CaptainOpenTableComponent', () => {
  let component: CaptainOpenTableComponent;
  let fixture: ComponentFixture<CaptainOpenTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptainOpenTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptainOpenTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
