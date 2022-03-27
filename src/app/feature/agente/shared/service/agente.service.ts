import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Agente } from '../model/agente';

@Injectable({ providedIn: 'root' })
export class AgenteService {

  constructor(protected http: HttpService) { }

  public consultar() {
    var baseUrl = environment.endpoint+"/agentes";
    return this.http.doGet<Agente[]>(baseUrl);
  }

  public consultarId(id: string) {
    return this.http.doGet<Agente[]>(`${environment.endpoint}/agentes/` + id, this.http.optsName('consultar agentes'));
  }

  public guardar(categoria: Agente, id?: string) {
    if (id == undefined) {
      return this.http.doPost<Agente, boolean>(`${environment.endpoint}/agentes`, categoria,
        this.http.optsName('crear agentes'));
    }
    else{
      debugger
      return this.http.doPost<Agente, boolean>(`${environment.endpoint}/agentes/${id}`, categoria,
      this.http.optsName('modificar agentes'));
    }
  }

  public eliminar(id: string) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/agentes/${id}`,
      this.http.optsName('eliminar agentes'));
  }
}
