import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { CategoriaAddComponent } from '@categoria/components/categoria-add/categoria-add.component';
import { CategoriaService } from '@categoria/shared/service/categoria.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CategoriaAddComponent', () => {
    let component: CategoriaAddComponent;
    let fixture: ComponentFixture<CategoriaAddComponent>;
    let categoriaService: CategoriaService;
    let spyAgregar;
    const testError = {
      status: 404,
      error: {
          mensaje: 'Test 404 error'
      }
    };

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ CategoriaAddComponent ],
        imports: [
          CommonModule,
          HttpClientModule,
          RouterTestingModule,
          ReactiveFormsModule,
          FormsModule
        ],
        providers: [CategoriaService, HttpService],
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(CategoriaAddComponent);
      component = fixture.componentInstance;
      categoriaService = TestBed.inject(CategoriaService);
      spyAgregar = spyOn(categoriaService, 'guardar').and.returnValue(
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
      component.createCategoria();
      expect(component.notificacion.isVisible()).toBeTruthy();
      expect(component.notificacion.getTitle().textContent).toEqual('Error');
    });

    it('Registrando categoria', () => {
      expect(component.form.valid).toBeFalsy();
      component.form.controls.id.setValue('101');
      component.form.controls.descripcion.setValue('Super camión');
      expect(component.form.valid).toBeTruthy();
      expect(component.createCategoria()).toBe();
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
