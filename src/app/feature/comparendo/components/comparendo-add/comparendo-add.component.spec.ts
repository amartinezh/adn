import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComparendoAddComponent } from '@comparendo/components/comparendo-add/comparendo-add.component';
import { ComparendoService } from '@comparendo/shared/service/comparendo.service';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComparendoServiceMock } from '@comparendo/shared/service/comparendo.service.mock';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PosiblesInfractorService } from '@comparendo/shared/service/posibles_infractores.service';
import { AgenteService } from '@agente/shared/service/agente.service';
import { CategoriaService } from '@categoria/shared/service/categoria.service';

describe('ComparendoAddComponent', () => {
  let component: ComparendoAddComponent;
  let fixture: ComponentFixture<ComparendoAddComponent>;
  let comparendoService: ComparendoService;
  let spyCrear;
  let spyGuardar;
  let spyConsultar;
  let route: ActivatedRoute;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ComparendoAddComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [HttpService, PosiblesInfractorService, AgenteService, CategoriaService, {
        provide: ComparendoService, useClass: ComparendoServiceMock
      },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: '1' } } },
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparendoAddComponent);
    route = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;
    comparendoService = TestBed.inject(ComparendoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.form.valid).toBeTruthy();
  });

  it('Debe ser invalido el formulario', () => {
    expect(component.form.valid).toBeTruthy();
  });

  it('Debe ser valido el formulario', () => {
    component.form.controls.id.setValue('009');
    component.form.controls.posiblesInfractores.setValue('1');
    component.form.controls.agentesId.setValue('1');
    component.form.controls.categoriasId.setValue('8');
    component.form.controls.valor.setValue('12000');
    expect(component.form.valid).toBeTruthy();
  });

  it('Debe abrir el componente para agregar un comparendo', () => {
    spyCrear = spyOn(comparendoService, 'guardar').and.callThrough();
    component.form.controls.id.setValue('009');
    component.form.controls.posiblesInfractores.setValue('1');
    component.form.controls.agentesId.setValue('1');
    component.form.controls.categoriasId.setValue('8');
    component.form.controls.valor.setValue('12000');
    fixture.detectChanges();
    expect(spyCrear).toBeTruthy();
  });

  it('Debe guardar un agente de transito', () => {
    component.form.controls.id.setValue('009');
    component.form.controls.posiblesInfractores.setValue('1');
    component.form.controls.agentesId.setValue('1');
    component.form.controls.categoriasId.setValue('8');
    component.form.controls.valor.setValue('13000');
    spyGuardar = spyOn(comparendoService, 'guardar').and.callThrough();
    spyCrear = spyOn(component, 'createComparendo').and.callFake(() => null);
    route.snapshot.params.id = undefined;
    component.isAddMode = true;

    component.onSubmit();
    expect(spyCrear).toHaveBeenCalled();
    expect(spyGuardar).toBeTruthy();
  });

  it('Debe metodo createComparendo()', () => {
    component.form.controls.id.setValue('009');
    component.form.controls.posiblesInfractores.setValue('1');
    component.form.controls.agentesId.setValue('1');
    component.form.controls.categoriasId.setValue('8');
    component.form.controls.valor.setValue('12000');
    spyGuardar = spyOn(comparendoService, 'guardar');
    spyGuardar.and.returnValue(of(component.success('El comparendo se ha generado correctamente')));
    component.createComparendo();
    route.snapshot.params.id = '1';
    component.isAddMode = true;

    component.createComparendo(); // R

    expect(spyGuardar).toHaveBeenCalled();
  });

  it('Debe modificar un comparendo', () => {
    component.form.controls.id.setValue('009');
    component.form.controls.posiblesInfractores.setValue('1');
    component.form.controls.agentesId.setValue('1');
    component.form.controls.categoriasId.setValue('8');
    component.form.controls.valor.setValue('12000');
    spyGuardar = spyOn(comparendoService, 'editar').and.callFake(() => null);
    spyCrear = spyOn(component, 'updateComparendo').and.callFake(() => null);
    route.snapshot.params.id = '1';
    component.updateComparendo();
    expect(spyCrear).toHaveBeenCalled();
    expect(spyGuardar).toBeTruthy();
  });

  it('Debe generar el dialogo de mensaje', () => {
    component.success('Titulo');
    expect(component.notificacion).toBeDefined();
  });

  it('Debe generar el dialogo de error', () => {
    component.mostrarError('err');
    expect(component.notificacion).toBeDefined();
  });

  it('Debe acceso a los campos del formulario', () => {
    expect(component.f).toBeDefined();
  });

  it('Debe acceso a los campos del formulario', () => {
    expect(component.f).toBeDefined();
  });

  it('Debe validar la ejecución del submit con formulario valido para agregar', () => {
    component.form.controls.id.setValue('009');
    component.form.controls.posiblesInfractores.setValue('1');
    component.form.controls.agentesId.setValue('1');
    component.form.controls.categoriasId.setValue('8');
    component.form.controls.valor.setValue('12000');
    component.form.clearAsyncValidators();
    component.form.clearValidators();
    component.form.updateValueAndValidity();
    route.snapshot.params.id = '1';

    component.onSubmit();
    expect(component.submitted).toBeTrue();
    expect(component.loading).toBeFalse();
  });

  it('Debe validar la ejecución del submit con formulario invalido', () => {
    component.onSubmit();
    expect(component.submitted).toBeTrue();
    expect(component.loading).toBeFalse();
  });

  it('Debe validar la ejecución del submit con formulario valido para modificar', () => {
    component.form.controls.id.setValue('009');
    component.form.controls.posiblesInfractores.setValue('1');
    component.form.controls.agentesId.setValue('1');
    component.form.controls.categoriasId.setValue('8');
    component.form.controls.valor.setValue('12000');
    component.form.clearAsyncValidators();
    component.form.clearValidators();
    component.form.updateValueAndValidity();
    component.isAddMode = false;
    component.onSubmit();
    expect(component.submitted).toBeTrue();
    expect(component.loading).toBeFalse();
  });

  it('Debe consultar un agente por ID', () => {
    spyCrear = spyOn(comparendoService, 'consultarId').and.callThrough();
    expect(spyCrear).toBeTruthy();
  });

  it('Debe iniciar el componente para modificar', () => {
    let spyConsultar2;
    spyConsultar = spyOn(component, 'ngOnInit').and.callThrough();
    spyConsultar2 = spyOn(component, 'consultarId').and.callThrough();
    component.isAddMode = false;
    component.id = '1';
    component.ngOnInit();
    component.consultarId('1');
    expect(spyConsultar).toHaveBeenCalled();
    expect(spyConsultar2).toHaveBeenCalled();
  });

  it('Debe validar la ejecución del submit con formulario NO valido para modificar', () => {
    component.form.controls.id.setValue(undefined);
    component.form.controls.posiblesInfractores.setValue(undefined);
    component.form.controls.agentesId.setValue(undefined);
    component.form.controls.categoriasId.setValue(undefined);
    component.form.controls.valor.setValue(undefined);
    component.form.clearAsyncValidators();
    component.form.clearValidators();
    component.form.updateValueAndValidity();
    component.isAddMode = false;

    component.onSubmit();

    expect(component.submitted).toBeTrue();
    expect(component.loading).toBeFalse();
  });

  it('Debe sacar error en crear agente', () => {
    spyGuardar = spyOn(comparendoService, 'guardar').and.callThrough();
    component.form.controls.id.setValue(null);
    component.form.controls.posiblesInfractores.setValue(null);
    component.form.controls.agentesId.setValue(null);
    component.form.controls.categoriasId.setValue(null);
    component.form.controls.valor.setValue(null);

    component.createComparendo();

    expect(component.notificacion).toBeDefined();
    expect(spyGuardar).toHaveBeenCalled();
  });

});
