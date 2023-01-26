import { TestBed } from '@angular/core/testing';

import { CpfConsultService } from './cpf-consult.service';

describe('CpfConsultService', () => {
  let service: CpfConsultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpfConsultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
