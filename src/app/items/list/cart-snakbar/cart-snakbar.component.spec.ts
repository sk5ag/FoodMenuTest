import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSnakbarComponent } from './cart-snakbar.component';

describe('CartSnakbarComponent', () => {
  let component: CartSnakbarComponent;
  let fixture: ComponentFixture<CartSnakbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartSnakbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSnakbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
