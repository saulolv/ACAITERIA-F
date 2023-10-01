import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhamentoModalComponent } from './acompanhamento-modal.component';

describe('AcompanhamentoModalComponent', () => {
  let component: AcompanhamentoModalComponent;
  let fixture: ComponentFixture<AcompanhamentoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcompanhamentoModalComponent]
    });
    fixture = TestBed.createComponent(AcompanhamentoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
