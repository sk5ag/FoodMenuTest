import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavSnakbarComponent } from './fav-snakbar.component';

describe('FavSnakbarComponent', () => {
  let component: FavSnakbarComponent;
  let fixture: ComponentFixture<FavSnakbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavSnakbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavSnakbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
