import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaAddComponent } from '@categoria/components/categoria-add/categoria-add.component';
import { CategoriaService } from '@categoria/shared/service/categoria.service';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CategoriaServiceMock } from '@categoria/shared/service/categoria.service.mock';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CategoriaAddComponent', () => {
  let component: CategoriaAddComponent;
  let fixture: ComponentFixture<CategoriaAddComponent>;
  let categoriaService: CategoriaService;
  let spyCrear;
  let spyGuardar;
  let spyConsultar;
  let route: ActivatedRoute;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaAddComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [HttpService, {
        provide: CategoriaService, useClass: CategoriaServiceMock
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
    fixture = TestBed.createComponent(CategoriaAddComponent);
    route = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;
    categoriaService = TestBed.inject(CategoriaService);
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
    component.form.controls.id.setValue('010');
    component.form.controls.descripcion.setValue('Vehiculo Alfa');
    expect(component.form.valid).toBeTruthy();
  });

  it('Debe abrir el componente para agregar una categoria', () => {
    spyCrear = spyOn(categoriaService, 'guardar').and.callThrough();
    component.form.controls.id.setValue('010');
    component.form.controls.descripcion.setValue('Vehiculo Alfa');
    fixture.detectChanges();
    expect(spyCrear).toBeTruthy();
  });

  it('Debe guardar una categoria', () => {
    component.form.controls.id.setValue('010');
    component.form.controls.descripcion.setValue('Vehiculo Alfa');
    spyGuardar = spyOn(categoriaService, 'guardar').and.callThrough();
    spyCrear = spyOn(component, 'createCategoria').and.callFake(() => null);
    route.snapshot.params.id = undefined;
    component.isAddMode = true;

    component.onSubmit();
    expect(spyCrear).toHaveBeenCalled();
    expect(spyGuardar).toBeTruthy();
  });

  it('Debe metodo createCategoria()', () => {
    component.form.controls.id.setValue('010');
    component.form.controls.descripcion.setValue('Vehiculo Alfa');
    spyGuardar = spyOn(categoriaService, 'guardar');
    spyGuardar.and.returnValue(of(component.success()));
    component.createCategoria();
    route.snapshot.params.id = '1';
    component.isAddMode = true;

    component.createCategoria(); // R

    expect(spyGuardar).toHaveBeenCalled();
  });

  it('Debe modificar una categoria', () => {
    component.form.controls.id.setValue('010');
    component.form.controls.descripcion.setValue('Vehiculo Alfa');
    spyGuardar = spyOn(categoriaService, 'editar').and.callFake(() => null);
    spyCrear = spyOn(component, 'updateCategoria').and.callFake(() => null);
    route.snapshot.params.id = '1';
    component.updateCategoria();
    expect(spyCrear).toHaveBeenCalled();
    expect(spyGuardar).toBeTruthy();
  });

  it('Debe generar el dialogo de mensaje', () => {
    component.success();
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
    component.form.controls.id.setValue('010');
    component.form.controls.descripcion.setValue('Vehiculo Alfa');
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
    component.form.controls.id.setValue('010');
    component.form.controls.descripcion.setValue('Vehiculo Alfa');
    component.form.clearAsyncValidators();
    component.form.clearValidators();
    component.form.updateValueAndValidity();
    component.isAddMode = false;
    component.onSubmit();
    expect(component.submitted).toBeTrue();
    expect(component.loading).toBeFalse();
  });

  it('Debe consultar una categoria por ID', () => {
    spyCrear = spyOn(categoriaService, 'consultarId').and.callThrough();
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
    component.form.controls.id.setValue(null);
    component.form.controls.descripcion.setValue(null);
    component.form.clearAsyncValidators();
    component.form.clearValidators();
    component.form.updateValueAndValidity();
    component.isAddMode = false;

    component.onSubmit();

    expect(component.submitted).toBeTrue();
    expect(component.loading).toBeFalse();
  });

  it('Debe sacar error en crear agente', () => {
    spyGuardar = spyOn(categoriaService, 'guardar').and.callThrough();
    component.form.controls.id.setValue(null);
    component.form.controls.descripcion.setValue(null);

    component.createCategoria();

    expect(component.notificacion).toBeDefined();
    expect(spyGuardar).toHaveBeenCalled();
  });

});
