import { of } from 'rxjs';
import { Comparendo } from '@shared/models/Comparendo/comparendo';
import { ComparendoMock, ComparendoMockArray } from '../model/comparendoMock';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from '@core/services/http.service';
import { ComparendoService } from './comparendo.service';
import { TestBed } from '@angular/core/testing';

describe('Comparendos', () => {
  let service: ComparendoService;
  let http: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: ComparendoService, useClass: ComparendoService }, HttpService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    service = TestBed.inject(ComparendoService);
    http = TestBed.inject(HttpService);
  });

  it('should return an Obsevable<boolean> on create', () => {
    const spyDoPost = spyOn(http, 'doPost').and.returnValue(of(true));
    service.guardar(ComparendoMock).subscribe((res: boolean) => {
      expect(res).toBeTruthy();
    });
    expect(spyDoPost).toHaveBeenCalled();
  });

  it('should return an Obsevable<Comparendo>', () => {
    const spyDoGet = spyOn(http, 'doGet').and.returnValue(of(ComparendoMock));
    service.consultarId('1').subscribe((res: Comparendo) => {
      expect(res).toEqual(ComparendoMock);
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

  it('AGENTE {Deberia ser creada}', () => {
    const comparendoService: ComparendoService = TestBed.inject(ComparendoService);
    expect(comparendoService).toBeTruthy();
  });

  it('should return an Obsevable<Comparendo[]>', () => {
    const spyDoGet = spyOn(http, 'doGet').and.returnValue(of(ComparendoMockArray));

    service.consultar().subscribe((res: Comparendo[]) => {
      expect(res).toEqual(ComparendoMockArray);
    });

    expect(spyDoGet).toHaveBeenCalled();
  });

  it('should return an Obsevable<boolean>', () => {
    const spyDoPut = spyOn(http, 'doPut').and.returnValue(of(true));

    service.editar(ComparendoMock, '1').subscribe((res: boolean) => {
      expect(res).toBeTrue();
    });
    expect(spyDoPut).toHaveBeenCalled();
  });

});
