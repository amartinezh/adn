import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: HttpService, useClass: HttpService }, HttpService]
    });
  });

  it('AGENTE {Deberia ser creada}', () => {
    const horarioService: HttpService = TestBed.inject(HttpService);
    expect(horarioService).toBeTruthy();
  });

});
