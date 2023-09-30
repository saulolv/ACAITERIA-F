import { TestBed } from '@angular/core/testing';

import { ItemPedidoServiceService } from './item-pedido-service.service';

describe('ItemPedidoServiceService', () => {
  let service: ItemPedidoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemPedidoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
