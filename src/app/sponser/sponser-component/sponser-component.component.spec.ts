import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponserComponentComponent } from './sponser-component.component';

describe('SponserComponentComponent', () => {
  let component: SponserComponentComponent;
  let fixture: ComponentFixture<SponserComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponserComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
