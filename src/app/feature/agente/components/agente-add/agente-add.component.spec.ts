import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgenteAddComponent } from '@agente/components/agente-add/agente-add.component';
import { AgenteService } from '@agente/shared/service/agente.service';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AgenteServiceMock } from '@agente/shared/service/agente.service.mock';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('AgenteAddComponent', () => {
  let component: AgenteAddComponent;
  let fixture: ComponentFixture<AgenteAddComponent>;
  let agenteService: AgenteService;
  let spyCrear;
  let spyGuardar;
  let spyConsultar;
  let route: ActivatedRoute;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AgenteAddComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [HttpService, {
        provide: AgenteService, useClass: AgenteServiceMock
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
    fixture = TestBed.createComponent(AgenteAddComponent);
    route = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;
    agenteService = TestBed.inject(AgenteService);
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
    component.form.controls.id.setValue('090');
    component.form.controls.nombre.setValue('Super agente');
    component.form.controls.telefono.setValue('315 665778');
    component.form.controls.horaInicioLabor.setValue('8');
    component.form.controls.horaFinLabor.setValue('12');
    expect(component.form.valid).toBeTruthy();
  });

  it('Debe abrir el componente para agregar un agente de transito', () => {
    spyCrear = spyOn(agenteService, 'guardar').and.callThrough();
    component.form.controls.id.setValue('090');
    component.form.controls.nombre.setValue('Super agente');
    component.form.controls.telefono.setValue('315 665778');
    component.form.controls.horaInicioLabor.setValue('8');
    component.form.controls.horaFinLabor.setValue('12');
    fixture.detectChanges();
    expect(spyCrear).toBeTruthy();
  });

  it('Debe guardar un agente de transito', () => {
    component.form.controls.id.setValue('090');
    component.form.controls.nombre.setValue('Super agente');
    component.form.controls.telefono.setValue('315 665778');
    component.form.controls.horaInicioLabor.setValue('8');
    component.form.controls.horaFinLabor.setValue('12');
    spyGuardar = spyOn(agenteService, 'guardar').and.callThrough();
    spyCrear = spyOn(component, 'createAgente').and.callFake(() => null);
    route.snapshot.params.id = undefined;
    component.isAddMode = true;

    component.onSubmit();
    expect(spyCrear).toHaveBeenCalled();
    expect(spyGuardar).toBeTruthy();
  });

  it('Debe metodo createAgent()', () => {
    component.form.controls.id.setValue('090');
    component.form.controls.nombre.setValue('Super agente');
    component.form.controls.telefono.setValue('315 665778');
    component.form.controls.horaInicioLabor.setValue('8');
    component.form.controls.horaFinLabor.setValue('12');
    spyGuardar = spyOn(agenteService, 'guardar');
    spyGuardar.and.returnValue(of(component.success()));
    component.createAgente();
    route.snapshot.params.id = '1';
    component.isAddMode = true;

    component.createAgente(); // R

    expect(spyGuardar).toHaveBeenCalled();
  });

  it('Debe modificar un agente de transito', () => {
    component.form.controls.id.setValue('090');
    component.form.controls.nombre.setValue('Super agente');
    component.form.controls.telefono.setValue('315 665778');
    component.form.controls.horaInicioLabor.setValue('8');
    component.form.controls.horaFinLabor.setValue('12');
    spyGuardar = spyOn(agenteService, 'editar').and.callFake(() => null);
    spyCrear = spyOn(component, 'updateAgente').and.callFake(() => null);
    route.snapshot.params.id = '1';
    component.updateAgente();
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
    component.form.controls.id.setValue('090');
    component.form.controls.nombre.setValue('Super agente');
    component.form.controls.telefono.setValue('315 665778');
    component.form.controls.horaInicioLabor.setValue('8');
    component.form.controls.horaFinLabor.setValue('12');
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
    component.form.controls.id.setValue('090');
    component.form.controls.nombre.setValue('Super agente');
    component.form.controls.telefono.setValue('315 665778');
    component.form.controls.horaInicioLabor.setValue('8');
    component.form.controls.horaFinLabor.setValue('12');
    component.form.clearAsyncValidators();
    component.form.clearValidators();
    component.form.updateValueAndValidity();
    component.isAddMode = false;
    component.onSubmit();
    expect(component.submitted).toBeTrue();
    expect(component.loading).toBeFalse();
  });

  it('Debe consultar un agente por ID', () => {
    spyCrear = spyOn(agenteService, 'consultarId').and.callThrough();
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
    component.form.controls.nombre.setValue(null);
    component.form.controls.telefono.setValue(null);
    component.form.controls.horaInicioLabor.setValue(null);
    component.form.controls.horaFinLabor.setValue(null);
    component.form.clearAsyncValidators();
    component.form.clearValidators();
    component.form.updateValueAndValidity();
    component.isAddMode = false;

    component.onSubmit();

    expect(component.submitted).toBeTrue();
    expect(component.loading).toBeFalse();
  });

  it('Debe sacar error en crear agente', () => {
    spyGuardar = spyOn(agenteService, 'guardar').and.callThrough();
    component.form.controls.id.setValue(null);
    component.form.controls.nombre.setValue(null);
    component.form.controls.telefono.setValue(null);
    component.form.controls.horaInicioLabor.setValue(null);
    component.form.controls.horaFinLabor.setValue(null);

    component.createAgente();

    expect(component.notificacion).toBeDefined();
    expect(spyGuardar).toHaveBeenCalled();
  });

});
