import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaService } from '@categoria/shared/service/categoria.service';
import { of } from 'rxjs';

import { CategoriaAddComponent } from './categoria-add.component';

describe('CategoriaAddComponent', () => {
  let component: CategoriaAddComponent;
  let fixture: ComponentFixture<CategoriaAddComponent>;
  let categoriaService: CategoriaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaAddComponent);
    component = fixture.componentInstance;
    categoriaService = TestBed.inject(CategoriaService);
    spyOn(categoriaService, 'guardar').and.returnValue(
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

  it('Registrando categoria', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls.id.setValue('001');
    component.form.controls.descripcion.setValue('Producto test');
    expect(component.form.valid).toBeTruthy();

    component.onSubmit();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });

});
