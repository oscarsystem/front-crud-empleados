import { TestBed } from '@angular/core/testing';

import { ConsultasEmpleadoService } from './consultas-empleado.service';

describe('ConsultasEmpleadoService', () => {
  let service: ConsultasEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultasEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
