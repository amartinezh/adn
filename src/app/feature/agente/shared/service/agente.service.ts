import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Agente } from '../model/agente';

@Injectable()
export class AgenteService {

  constructor(protected http: HttpService) { }

  public consultar() {
    const baseUrl = environment.endpoint + '/agentes';
    return this.http.doGet<Agente[]>(baseUrl);
  }

  public consultarId(id: string) {
    return this.http.doGet<Agente>(`${environment.endpoint}/agentes/` + id, this.http.optsName('consultar agentes'));
  }

  public guardar(agente: Agente) {
      return this.http.doPost<Agente, boolean>(`${environment.endpoint}/agentes`, agente);
  }

  public editar(agente: Agente, id: string) {
      return this.http.doPut<Agente, boolean>(`${environment.endpoint}/agentes/${id}`, agente);
  }

  public eliminar(id: string) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/agentes/${id}`,
      this.http.optsName('eliminar agentes'));
  }
}
