import { TestBed } from '@angular/core/testing';

import { AcompanhamentoServiceService } from './acompanhamento-service.service';

describe('AcompanhamentoServiceService', () => {
  let service: AcompanhamentoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcompanhamentoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
