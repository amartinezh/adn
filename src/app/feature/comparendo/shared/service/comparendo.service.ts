import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Comparendo } from '../model/comparendo';

@Injectable()
export class ComparendoService {

  constructor(protected http: HttpService) { }

  public consultar() {
    const baseUrl = environment.endpoint + '/comparendos';
    return this.http.doGet<Comparendo[]>(baseUrl);
  }

  public consultarId(id: string) {
    return this.http.doGet<Comparendo>(`${environment.endpoint}/comparendos/` + id, this.http.optsName('consultar comparendos'));
  }

  public guardar(agente: Comparendo) {
    return this.http.doPost<Comparendo, boolean>(`${environment.endpoint}/comparendos`, agente);
  }

  public editar(agente: Comparendo, id: string) {
    return this.http.doPut<Comparendo, boolean>(`${environment.endpoint}/comparendos/${id}`, agente);
  }

  public eliminar(id: string) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/comparendos/${id}`,
      this.http.optsName('eliminar comparendos'));
  }
}
