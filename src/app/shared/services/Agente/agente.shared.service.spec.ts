import { AgenteTestDataBuilder } from '@agente/shared/model/agente.testdatabuilder';
import { environment } from 'src/environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AgenteSharedService } from './agente.shared.service';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { HttpResponse } from '@angular/common/http';
import { first } from 'rxjs/operators';

describe('AGENTE DE TRÁNSITO', () => {
  let service: AgenteSharedService;
  let httpMock: HttpTestingController;
  const apiEndopoint = `${environment.endpoint}/agentes`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: AgenteSharedService, useClass: AgenteSharedService }, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(AgenteSharedService);
  });

  it('AGENTE {Deberia ser creada}', () => {
    const horarioService: AgenteSharedService = TestBed.inject(AgenteSharedService);
    expect(horarioService).toBeTruthy();
  });

  it('AGENTE {Deberia consultar GET}', () => {
    const dummyAgentes = [
      new AgenteTestDataBuilder('88', 'Agente 88', '123', 8, 15).build(),
      new AgenteTestDataBuilder('99', 'Agente 99', '123', 9, 16).build()
    ];
    service.consultar()
    .pipe(first())
    .subscribe((horarios) => {
      expect(horarios.length).toBe(2);
      expect(horarios).toEqual(dummyAgentes);
    });
    const req = httpMock.expectOne(apiEndopoint);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAgentes);
  });

  it('AGENTE {Deberia eliminar DELETE}', () => {
    const dummyAgentePre = { id: '100', nombre: 'Agente 100', telefono: '60', horaInicioLabor: 8, horaFinLabor: 14 };
    service.eliminar(dummyAgentePre.id).subscribe((respuesta) => {
      expect(respuesta).toEqual(false);
    });
    const req = httpMock.expectOne(`${apiEndopoint}/${dummyAgentePre.id}`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({ body: false }));
  });
});
