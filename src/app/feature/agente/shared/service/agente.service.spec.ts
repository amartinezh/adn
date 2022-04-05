import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AgenteService } from './agente.service';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Agente } from '../model/agente';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AgenteMock, AgenteMockArray } from '../model/agenteMock';
import { of } from 'rxjs';

describe('AGENTE DE TRÁNSITO', () => {
  let service: AgenteService;
  let http: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: AgenteService, useClass: AgenteService }, HttpService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    service = TestBed.inject(AgenteService);
    http = TestBed.inject(HttpService);
  });

  it('AGENTE {Deberia ser creada}', () => {
    const agenteService: AgenteService = TestBed.inject(AgenteService);
    expect(agenteService).toBeTruthy();
  });

  it('should return an Obsevable<boolean> on create', () => {
    const spyDoPost = spyOn(http, 'doPost').and.returnValue(of(true));

    service.guardar(AgenteMock).subscribe((res: boolean) => {
      expect(res).toBeTruthy();
    });

    expect(spyDoPost).toHaveBeenCalled();
  });

  it('should return an Obsevable<Agente>', () => {
    const spyDoGet = spyOn(http, 'doGet').and.returnValue(of(AgenteMock));

    service.consultarId('1').subscribe((res: Agente) => {
      expect(res).toEqual(AgenteMock);
    });

    expect(spyDoGet).toHaveBeenCalled();
  });

  it('should return an Obsevable<Agente[]>', () => {
    const spyDoGet = spyOn(http, 'doGet').and.returnValue(of(AgenteMockArray));

    service.consultar().subscribe((res: Agente[]) => {
      expect(res).toEqual(AgenteMockArray);
    });

    expect(spyDoGet).toHaveBeenCalled();
  });

  it('should return an Obsevable<boolean>', () => {
    const spyDoDelete = spyOn(http, 'doDelete').and.returnValue(of(true));

    service.eliminar('1').subscribe((res: boolean) => {
      expect(res).toBeTrue();
    });

    expect(spyDoDelete).toHaveBeenCalled();
  });

  it('should return an Obsevable<boolean>', () => {
    const spyDoPut = spyOn(http, 'doPut').and.returnValue(of(true));

    service.editar(AgenteMock, '1').subscribe((res: boolean) => {
      expect(res).toBeTrue();
    });

    expect(spyDoPut).toHaveBeenCalled();
  });

});
