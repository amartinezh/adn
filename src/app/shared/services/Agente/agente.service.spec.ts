import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AgenteSharedService } from './agente.shared.service';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Agente } from './../../models/Agente/agente';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AgenteMockArray } from './../../models/Agente/agenteMock';
import { of } from 'rxjs';

describe('AGENTE DE TRÁNSITO', () => {
  let service: AgenteSharedService;
  let http: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: AgenteSharedService, useClass: AgenteSharedService }, HttpService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    service = TestBed.inject(AgenteSharedService);
    http = TestBed.inject(HttpService);
  });

  it('should return an Obsevable<boolean>', () => {
    const spyDoDelete = spyOn(http, 'doDelete').and.returnValue(of(true));

    service.eliminar('1').subscribe((res: boolean) => {
      expect(res).toBeTrue();
    });

    expect(spyDoDelete).toHaveBeenCalled();
  });

  it('AGENTE {Deberia ser creada}', () => {
    const agenteService: AgenteSharedService = TestBed.inject(AgenteSharedService);
    expect(agenteService).toBeTruthy();
  });

  it('should return an Obsevable<Agente[]>', () => {
    const spyDoGet = spyOn(http, 'doGet').and.returnValue(of(AgenteMockArray));

    service.consultar().subscribe((res: Agente[]) => {
      expect(res).toEqual(AgenteMockArray);
    });

    expect(spyDoGet).toHaveBeenCalled();
  });

});
