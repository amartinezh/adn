import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Categoria } from '@shared/models/Categoria/categoria';

@Injectable()
export class CategoriaSharedService {

  constructor(protected http: HttpService) { }

  public consultar() {
    const baseUrl = environment.endpoint + '/categorias';
    return this.http.doGet<Categoria[]>(baseUrl);
  }
}
