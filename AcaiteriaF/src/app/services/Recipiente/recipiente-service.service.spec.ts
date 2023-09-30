import { TestBed } from '@angular/core/testing';

import { RecipienteServiceService } from './recipiente-service.service';

describe('RecipienteServiceService', () => {
  let service: RecipienteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipienteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
