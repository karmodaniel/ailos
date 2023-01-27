import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { User } from '../../../shared/models/user/user.class';
import { CpfConsultService } from './cpf-consult.service';

fdescribe('CpfConsultService', () => {
  let service: CpfConsultService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CpfConsultService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user by id', () => {
    const cpf = '02031516201';
    const response = new User(
      '02031516201',
      '020.315.162-01',
      'DANIEL ARAUJO DO CARMO',
      '12/01/1998',
      'Regular',
      '21/05/2010'
    );

    service.getUserByCpf(cpf).subscribe((res) => {
      expect(res).toBe(response);
    });

    const req = httpController.expectOne(`http://localhost:3000/users/${cpf}`);

    expect(req.request.url).toBe(`http://localhost:3000/users/${cpf}`);
    expect(req.request.method).toBe('GET');

    req.flush(response);
  });
});
