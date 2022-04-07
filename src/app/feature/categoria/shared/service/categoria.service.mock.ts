import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { of } from 'rxjs';
import { Categoria } from '../model/categoria';
import { CategoriaMockArray, CategoriaMock } from '../model/categoriaMock';

@Injectable()
export class CategoriaServiceMock {

  constructor(protected http: HttpService) { }

  public consultar() {
    return of(CategoriaMockArray);
  }

  public consultarId(id: string) {
    const agenteId = id;
    if (agenteId) {
      return of(CategoriaMock);
    }
    return true;
  }

  public guardar(agente: Categoria) {
    if (agente) {
      return of(true);
    }
    return true;
  }

  public editar(agente?: Categoria, id?: string) {
    const agenteId = id;
    if (agenteId || agente) {
      return of(true);
    }
    return true;
  }

  public eliminar(id: string) {
    const CategoriaId = id;
    if (CategoriaId) {
      return of(true);
    }
    return true;
  }
}
