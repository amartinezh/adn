import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CategoriaSharedService } from './categoria.service';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Categoria } from './../../models/Categoria/categoria';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CategoriaMockArray } from './../../models/Categoria/categoriaMock';
import { of } from 'rxjs';

describe('AGENTE DE TRÁNSITO', () => {
  let service: CategoriaSharedService;
  let http: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: CategoriaSharedService, useClass: CategoriaSharedService },
        HttpService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    service = TestBed.inject(CategoriaSharedService);
    http = TestBed.inject(HttpService);
  });

  it('AGENTE {Deberia ser creada}', () => {
    const categoriaService: CategoriaSharedService = TestBed.inject(CategoriaSharedService);
    expect(categoriaService).toBeTruthy();
  });

  it('should return an Obsevable<boolean>', () => {
    const spyDoDelete = spyOn(http, 'doDelete').and.returnValue(of(true));

    service.eliminar('1').subscribe((res: boolean) => {
      expect(res).toBeTrue();
    });

    expect(spyDoDelete).toHaveBeenCalled();
  });

  it('should return an Obsevable<Agente[]>', () => {
    const spyDoGet = spyOn(http, 'doGet').and.returnValue(of(CategoriaMockArray));

    service.consultar().subscribe((res: Categoria[]) => {
      expect(res).toEqual(CategoriaMockArray);
    });

    expect(spyDoGet).toHaveBeenCalled();
  });

});
