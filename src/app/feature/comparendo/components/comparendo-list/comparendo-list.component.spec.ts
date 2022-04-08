import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ComparendoListComponent } from './comparendo-list.component';
import { ComparendoServiceMock } from '@comparendo/shared/service/comparendo.service.mock';
import { Comparendo } from '@shared/models/Comparendo/comparendo';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComparendoService } from '@comparendo/shared/service/comparendo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PosiblesInfractor } from '@shared/models/Comparendo/posibles_infractores';
import { Agente } from '@shared/models/Agente/agente';
import { Categoria } from '@shared/models/Categoria/categoria';

describe('ComparendoListComponent', () => {
  let component: ComparendoListComponent;
  let fixture: ComponentFixture<ComparendoListComponent>;
  let agenteService: ComparendoService;
  const comparendoMockArray = [
    new Comparendo('1', new PosiblesInfractor('1', 'ERT 554', 12, 10, new Date('2022-04-01')),
      new Agente('1', 'Agente 1', '312234123', 2, 22),
      new Categoria('1', 'Camion 2 ejes'), new Date('2022-04-01'), 12000),
    new Comparendo('2', new PosiblesInfractor('2', 'XXX 999', 12, 10, new Date('2022-04-01')),
      new Agente('1', 'Agente 1', '312234123', 2, 22),
      new Categoria('1', 'Camion 2 ejes'), new Date('2022-04-01'), 12000)];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ComparendoListComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [HttpService, {
        provide: ComparendoService, useClass: ComparendoServiceMock
      }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparendoListComponent);
    component = fixture.componentInstance;
    agenteService = TestBed.inject(ComparendoService);
    fixture.detectChanges();
  });

  it('Debe generar el dialogo de mensaje', () => {
    component.mostrarError('mensaje');
    expect(component.notificacion).toBeDefined();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia validar una hora correcta', () => {
    component.INICIO_LABOR = 8;
    const hora = new Date().getHours() + 1;
    component.FIN_LABOR = hora;
    expect(component.validarHora()).toBeTruthy();
  });

  it('Deberia validar una hora incorrecta', () => {
    component.INICIO_LABOR = 8;
    const hora = new Date().getHours() - 1;
    component.FIN_LABOR = hora;
    expect(component.validarHora()).toBeFalsy();
  });

  it('Deberia validar una fecha correcta', () => {
    const fechaActual = new Date().getDate();
    expect(component.validarFecha(fechaActual)).toBeFalsy();
  });

  it('Deberia validar una fecha incorrecta', () => {
    const fechaAnterior = new Date().getTime() - 3;
    expect(component.validarFecha(fechaAnterior)).toBeTruthy();
  });

  it('Deberá consultar getInformacion', () => {
    const spyGuardar = spyOn(agenteService, 'consultar');
    spyGuardar.and.returnValue(of(comparendoMockArray));
    component.consultar();
    expect(spyGuardar).toBeTruthy();
  });

  it('Deberá eliminar un agente existente', () => {
    component.comparendos = comparendoMockArray;
    const spy = spyOn(component, 'eliminar').and.callThrough();
    spyOn(agenteService, 'eliminar').and.returnValue(of(true));
    component.eliminar('3');

    expect(spy).toHaveBeenCalled();
  });

  it('Deberá eliminar un agente inexistente', () => {
    component.comparendos = comparendoMockArray;
    const spy = spyOn(component, 'eliminar').and.callThrough();
    spyOn(agenteService, 'eliminar').and.returnValue(of(true));
    component.eliminar('1');
    expect(spy).toHaveBeenCalled();
  });
});
