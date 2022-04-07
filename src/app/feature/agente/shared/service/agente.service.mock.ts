import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { of } from 'rxjs';
import { Agente } from '../model/agente';
import { AgenteMockArray, AgenteMock } from './../model/agenteMock';

@Injectable()
export class AgenteServiceMock {

  constructor(protected http: HttpService) { }

  public consultar() {
    return of(AgenteMockArray);
  }

  public consultarId(id?: string) {
      id = ( (id === '1') ? '1' : '0');
      return of(AgenteMock);
  }

  public guardar(agente: Agente) {
    if (agente) {
      return of(true);
    }
    return true;
  }

  public editar(agente?: Agente, id?: string) {
    const agenteId = id;
    if (agenteId || agente) {
      return of(true);
    }
    return true;
  }

  public eliminar(id: string) {
    const agenteId = id;
    if (agenteId) {
      return of(true);
    }
    return true;
  }
}
