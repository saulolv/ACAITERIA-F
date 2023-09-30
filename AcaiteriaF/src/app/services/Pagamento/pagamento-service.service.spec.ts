import { TestBed } from '@angular/core/testing';

import { PagamentoServiceService } from './pagamento-service.service';

describe('PagamentoServiceService', () => {
  let service: PagamentoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagamentoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
