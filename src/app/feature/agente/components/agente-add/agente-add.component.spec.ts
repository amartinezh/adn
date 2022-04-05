import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { AgenteAddComponent } from '@agente/components/agente-add/agente-add.component';
import { AgenteService } from '@agente/shared/service/agente.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AgenteServiceMock } from '@agente/shared/service/agente.service.mock';

describe('AgenteAddComponent', () => {
    let component: AgenteAddComponent;
    let fixture: ComponentFixture<AgenteAddComponent>;
    let agenteService: AgenteService;
    let spyAgregar;
    const testError = {
      status: 404,
      error: {
          mensaje: 'Test 404 error'
      }
    };

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ AgenteAddComponent ],
        imports: [
          CommonModule,
          HttpClientModule,
          RouterTestingModule,
          ReactiveFormsModule,
          FormsModule
        ],
        providers: [HttpService, {
          provide: AgenteService, useClass: AgenteServiceMock
        }],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(AgenteAddComponent);
      component = fixture.componentInstance;
      agenteService = TestBed.inject(AgenteService);
      
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('formulario es invalido cuando esta vacio', () => {
      expect(component.form.valid).toBeFalsy();
    });

    it('debería capturar el error in this.error', () => {
      spyAgregar.and.returnValue(throwError(testError));
      component.createAgente();
      expect(component.notificacion.isVisible()).toBeTruthy();
    });

    it('Debe ser invalido el formulario', () => {
      expect(component.form.valid).toBeFalsy();
    });

    it('Debe ser valido el formulario', () => {
      component.form.controls.id.setValue('090');
      component.form.controls.nombre.setValue('Super agente');
      component.form.controls.telefono.setValue('315 665778');
      component.form.controls.horaInicioLabor.setValue('8');
      component.form.controls.horaFinLabor.setValue('12');
      expect(component.form.valid).toBeTruthy();
    });

    it('Debe crear un agente de transito', () => {
      spyAgregar = spyOn(agenteService, 'guardar').and.callThrough();
      component.form.controls.id.setValue('090');
      component.form.controls.nombre.setValue('Super agente');
      component.form.controls.telefono.setValue('315 665778');
      component.form.controls.horaInicioLabor.setValue('8');
      component.form.controls.horaFinLabor.setValue('12');
      fixture.detectChanges();
      component.createAgente();
      expect(spyAgregar).toHaveBeenCalled();
    });

    it('Registrando valor con mensaje de error', () => {
      spyAgregar.and.returnValue(of(component.mostrarError('Error')));
      expect(component.notificacion.isVisible()).toBeTruthy();
    });
  });
