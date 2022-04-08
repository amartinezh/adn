import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CategoriaService } from './categoria.service';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Categoria } from '../model/categoria';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CategoriaMock, CategoriaMockArray } from '../model/categoriaMock';
import { of } from 'rxjs';

describe('CATEGORIA DE VEHÍCULO', () => {
  let service: CategoriaService;
  let http: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: CategoriaService, useClass: CategoriaService }, HttpService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    service = TestBed.inject(CategoriaService);
    http = TestBed.inject(HttpService);
  });

  it('CATEGORIA {Deberia ser creada}', () => {
    const categoriaService: CategoriaService = TestBed.inject(CategoriaService);
    expect(categoriaService).toBeTruthy();
  });

  it('should return an Obsevable<boolean> on create', () => {
    const spyDoPost = spyOn(http, 'doPost').and.returnValue(of(true));

    service.guardar(CategoriaMock).subscribe((res: boolean) => {
      expect(res).toBeTruthy();
    });

    expect(spyDoPost).toHaveBeenCalled();
  });

  it('should return an Obsevable<Categoria>', () => {
    const spyDoGet = spyOn(http, 'doGet').and.returnValue(of(CategoriaMock));

    service.consultarId('1').subscribe((res: Categoria) => {
      expect(res).toEqual(CategoriaMock);
    });

    expect(spyDoGet).toHaveBeenCalled();
  });

  it('should return an Obsevable<Categoria[]>', () => {
    const spyDoGet = spyOn(http, 'doGet').and.returnValue(of(CategoriaMockArray));

    service.consultar().subscribe((res: Categoria[]) => {
      expect(res).toEqual(CategoriaMockArray);
    });

    expect(spyDoGet).toHaveBeenCalled();
  });

  it('should return an Obsevable<boolean>', () => {
    const spyDoDelete = spyOn(http, 'doDelete').and.returnValue(of(true));

    service.eliminar('1').subscribe((res: boolean) => {
      expect(res).toBeTrue();
    });

    expect(spyDoDelete).toHaveBeenCalled();
  });

  it('should return an Obsevable<boolean>', () => {
    const spyDoPut = spyOn(http, 'doPut').and.returnValue(of(true));

    service.editar(CategoriaMock, '1').subscribe((res: boolean) => {
      expect(res).toBeTrue();
    });

    expect(spyDoPut).toHaveBeenCalled();
  });

});
