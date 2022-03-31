import { Agente } from '@shared/models/Agente/agente';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgenteSharedService {

  constructor(protected http: HttpService) { }

  public consultar() {
    const baseUrl = environment.endpoint + '/agentes';
    return this.http.doGet<Agente[]>(baseUrl);
  }
}
