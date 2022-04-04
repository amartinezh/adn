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

  public guardar(comparendo: Comparendo, id?: string) {
    if (id === undefined) {
      return this.http.doPost<Comparendo, boolean>(`${environment.endpoint}/comparendos`, comparendo,
        this.http.optsName('crear comparendos'));
    }
    else{
      return this.http.doPost<Comparendo, boolean>(`${environment.endpoint}/comparendos/${id}`, comparendo,
      this.http.optsName('modificar comparendos'));
    }
  }

  public eliminar(id: string) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/comparendos/${id}`,
      this.http.optsName('eliminar comparendos'));
  }
}
