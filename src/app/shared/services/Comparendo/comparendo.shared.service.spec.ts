import { environment } from 'src/environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComparendoSharedService } from './comparendo.shared.service';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { HttpResponse } from '@angular/common/http';

describe('Servicio COMPARENDO', () => {
  let service: ComparendoSharedService;
  let httpMock: HttpTestingController;
  const apiEndopoint = `${environment.endpoint}/comparendos`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: ComparendoSharedService, useClass: ComparendoSharedService }, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ComparendoSharedService);
  });

  it('COMPARENDO {Deberia ser creada}', () => {
    const horarioService: ComparendoSharedService = TestBed.inject(ComparendoSharedService);
    expect(horarioService).toBeTruthy();
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
