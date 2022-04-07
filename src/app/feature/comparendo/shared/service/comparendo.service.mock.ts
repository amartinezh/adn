import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { of } from 'rxjs';
import { Comparendo } from '@shared/models/Comparendo/comparendo';
import { ComparendoMockArray, ComparendoMock } from '../model/comparendoMock';

@Injectable()
export class ComparendoServiceMock {

  constructor(protected http: HttpService) { }

  public consultar() {
    return of(ComparendoMockArray);
  }

  public consultarId(id: string) {
    const comparendoId = id;
    if (comparendoId) {
      return of(ComparendoMock);
    }
  }

  public guardar(comparendo: Comparendo) {
    if (comparendo) {
      return of(true);
    }
  }

  public editar(agente?: Comparendo, id?: string) {
    const comparendoId = id;
    if (comparendoId || agente) {
      return of(true);
    }
  }

  public eliminar(id: string) {
    const comparendoId = id;
    if (comparendoId) {
      return of(true);
    }
  }
}
