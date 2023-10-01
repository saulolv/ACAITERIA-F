import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoModalComponent } from './carrinho-modal.component';

describe('CarrinhoModalComponent', () => {
  let component: CarrinhoModalComponent;
  let fixture: ComponentFixture<CarrinhoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrinhoModalComponent]
    });
    fixture = TestBed.createComponent(CarrinhoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
