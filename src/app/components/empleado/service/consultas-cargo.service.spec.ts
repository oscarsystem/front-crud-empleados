import { TestBed } from '@angular/core/testing';

import { ConsultasCargoService } from './consultas-cargo.service';

describe('ConsultasCargoService', () => {
  let service: ConsultasCargoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultasCargoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
