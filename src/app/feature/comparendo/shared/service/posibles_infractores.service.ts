import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { PosiblesInfractor } from '../model/posibles_infractores';

@Injectable({ providedIn: 'root' })
export class PosiblesInfractorService {

  constructor(protected http: HttpService) { }

  public consultar() {
    var baseUrl = environment.endpoint+"/posibles_infractores";
    return this.http.doGet<PosiblesInfractor[]>(baseUrl);
  }

  public consultarId(id: string) {
    return this.http.doGet<PosiblesInfractor[]>(`${environment.endpoint}/posibles_infractores/` + id, this.http.optsName('consultar comparendos'));
  }

  public guardar(comparendo: PosiblesInfractor, id?: string) {
    if (id == undefined) {
      return this.http.doPost<PosiblesInfractor, boolean>(`${environment.endpoint}/posibles_infractores`, comparendo,
        this.http.optsName('crear posibles infractores'));
    }
    else{
      debugger
      return this.http.doPost<PosiblesInfractor, boolean>(`${environment.endpoint}/posibles_infractores/${id}`, comparendo,
      this.http.optsName('modificar posibles infractores'));
    }
  }

  public eliminar(id: string) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/posibles_infractores/${id}`,
      this.http.optsName('eliminar comparendos'));
  }
}