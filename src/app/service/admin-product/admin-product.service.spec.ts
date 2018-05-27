import { TestBed, inject } from '@angular/core/testing';

import { AdminProductService } from './admin-product.service';

describe('AdminProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminProductService]
    });
  });

  it('should be created', inject([AdminProductService], (service: AdminProductService) => {
    expect(service).toBeTruthy();
  }));
});
