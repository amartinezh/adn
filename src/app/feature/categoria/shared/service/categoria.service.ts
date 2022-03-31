import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Categoria } from '../model/categoria';

@Injectable()
export class CategoriaService {

  constructor(protected http: HttpService) { }

  public consultar() {
    const baseUrl = environment.endpoint + '/categorias';
    return this.http.doGet<Categoria[]>(baseUrl);
  }

  public consultarId(id: string) {
    return this.http.doGet<Categoria[]>(`${environment.endpoint}/categorias/` + id, this.http.optsName('consultar categorias'));
  }

  public guardar(categoria: Categoria, id?: string) {
    if (id === undefined) {
      return this.http.doPost<Categoria, boolean>(`${environment.endpoint}/categorias`, categoria,
        this.http.optsName('crear categorias'));
    }
    else{
      return this.http.doPost<Categoria, boolean>(`${environment.endpoint}/categorias/${id}`, categoria,
      this.http.optsName('modificar categorias'));
    }
  }

  public eliminar(id: string) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/categorias/${id}`,
      this.http.optsName('eliminar categorias'));
  }
}
