import { TestBed } from '@angular/core/testing';

import { TamanhoServiceService } from './tamanho-service.service';

describe('TamanhoServiceService', () => {
  let service: TamanhoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TamanhoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
