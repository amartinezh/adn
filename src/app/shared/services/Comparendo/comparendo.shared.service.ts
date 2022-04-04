import { Comparendo } from '@shared/models/Comparendo/comparendo';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComparendoSharedService {

  constructor(protected http: HttpService) { }

  public consultar() {
    const baseUrl = environment.endpoint + '/comparendos';
    return this.http.doGet<Comparendo[]>(baseUrl);
  }

  public eliminar(id: string) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/comparendos/${id}`,
      this.http.optsName('eliminar comparendos'));
  }
}
