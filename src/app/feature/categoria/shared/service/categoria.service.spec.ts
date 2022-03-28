import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CategoriaService } from './categoria.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Categoria } from '../model/categoria';
import { HttpResponse } from '@angular/common/http';

describe('ProductoService', () => {
  let httpMock: HttpTestingController;
  let service: CategoriaService;
  const apiEndpointProductoConsulta = `${environment.endpoint}/tiposFamilia`;
  const apiEndpointProductos = `${environment.endpoint}/productos`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoriaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CategoriaService);
  });

  it('should be created', () => {
    const productService: CategoriaService = TestBed.inject(CategoriaService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar productos', () => {
    const dummyProductos = [
      new Categoria('1', 'Producto 1'), new Categoria('2', 'Producto 2')
    ];
    service.consultar().subscribe(productos => {
      expect(productos.length).toBe(2);
      expect(productos).toEqual(dummyProductos);
    });
    const req = httpMock.expectOne(apiEndpointProductoConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProductos);
  });

  it('deberia crear un producto', () => {
    const dummyProducto = new Categoria('1', 'Producto 1');
    service.guardar(dummyProducto).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointProductos);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un producto', () => {
    const dummyProducto = new Categoria('1', 'Producto 1');
    service.eliminar(dummyProducto.id).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointProductos}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
