import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { ComparendoAddComponent } from '@comparendo/components/comparendo-add/comparendo-add.component';
import { ComparendoService } from '@comparendo/shared/service/comparendo.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PosiblesInfractorService } from '@comparendo/shared/service/posibles_infractores.service';

describe('ComparendoAddComponent', () => {
    let component: ComparendoAddComponent;
    let fixture: ComponentFixture<ComparendoAddComponent>;
    let comparendoService: ComparendoService;
    let spyAgregar;
    const testError = {
      status: 404,
      error: {
          mensaje: 'Test 404 error'
      }
    };

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ ComparendoAddComponent ],
        imports: [
          CommonModule,
          HttpClientModule,
          RouterTestingModule,
          ReactiveFormsModule,
          FormsModule
        ],
        providers: [PosiblesInfractorService, ComparendoService, HttpService],
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ComparendoAddComponent);
      component = fixture.componentInstance;
      comparendoService = TestBed.inject(ComparendoService);
      spyAgregar = spyOn(comparendoService, 'guardar').and.returnValue(
        of(true)
      );
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
      expect(component.notificacion.isVisible()).toBeTruthy();
      expect(component.notificacion.getTitle().textContent).toEqual('Error');
    });

    it('Registrando comparendo', () => {
      expect(component.form.valid).toBeFalsy();
      component.form.controls.id.setValue('001');
      component.form.controls.posiblesInfractores.setValue('1');
      component.form.controls.agentesId.setValue('1');
      component.form.controls.categoriasId.setValue('1');
      component.form.controls.valor.setValue('10000');
      expect(component.form.valid).toBeTruthy();
      expect(component.createComparendo()).toBe();
      fixture.detectChanges();
      expect(component.notificacion.isVisible()).toBeTruthy();
      expect(component.notificacion.getTitle().textContent).toEqual('Éxito');
      component.notificacion.clickConfirm();
    });

    it('Registrando abono con mensaje de error', () => {
      spyAgregar.and.returnValue(of(component.mostrarError('Error')));
      expect(component.notificacion.isVisible()).toBeTruthy();
      expect(component.notificacion.getTitle().textContent).toEqual('Error');
    });
  });
