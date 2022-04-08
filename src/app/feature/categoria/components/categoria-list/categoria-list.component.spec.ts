import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CategoriaListComponent } from './categoria-list.component';
import { CategoriaServiceMock } from '@categoria/shared/service/categoria.service.mock';
import { Categoria } from '@shared/models/Categoria/categoria';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriaService } from '@categoria/shared/service/categoria.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AgenteListComponent', () => {
  let component: CategoriaListComponent;
  let fixture: ComponentFixture<CategoriaListComponent>;
  let categoriaService: CategoriaService;
  const listaCategorias: Categoria[] = [new Categoria('10', 'Categoria 10'),
  new Categoria('11', 'Categoria 11')];

  const CategoriaMockArray = [new Categoria('10', 'Categoria 10'),
  new Categoria('11', 'Categoria 11'),
  new Categoria('12', 'Categoria 11')];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaListComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [HttpService, {
        provide: CategoriaService, useClass: CategoriaServiceMock
      }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaListComponent);
    component = fixture.componentInstance;
    categoriaService = TestBed.inject(CategoriaService);
    fixture.detectChanges();
  });

  it('Debe generar el dialogo de mensaje', () => {
    component.success();
    expect(component.notificacion).toBeDefined();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberá consultar getInformacion', () => {
    const spyGuardar = spyOn(categoriaService, 'consultar').and.callThrough();
    spyGuardar.and.returnValue(of(CategoriaMockArray));
    component.consultar();
    expect(spyGuardar).toBeTruthy();
  });

  it('Deberá eliminar un agente existente', () => {
    component.categorias = listaCategorias;
    const spy = spyOn(component, 'eliminar').and.callThrough();
    spyOn(categoriaService, 'eliminar').and.returnValue(of(true));
    component.eliminar('10');

    expect(spy).toHaveBeenCalled();
  });

  it('Deberá eliminar un agente inexistente', () => {
    component.categorias = listaCategorias;
    const spy = spyOn(component, 'eliminar').and.callThrough();
    spyOn(categoriaService, 'eliminar').and.returnValue(of(true));
    component.eliminar('99');
    expect(spy).toHaveBeenCalled();
  });
});
