import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Categoria } from '@categoria/shared/model/categoria';
import { CategoriaService } from '@categoria/shared/service/categoria.service';
import { of } from 'rxjs';

import { CategoriaListComponent } from './categoria-list.component';

describe('CategoriaListComponent', () => {
  let component: CategoriaListComponent;
  let fixture: ComponentFixture<CategoriaListComponent>;
  let categoriaService: CategoriaService;
  const listaCategorias: Categoria[] = [new Categoria('1', 'Producto 1'), new Categoria('2', 'Producto 2')];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriaListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaListComponent);
    component = fixture.componentInstance;
    categoriaService = TestBed.inject(CategoriaService);
    spyOn(categoriaService, 'consultar').and.returnValue(
      of(listaCategorias)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('List the information', () => {
    expect(component).toBeTruthy();
  });
});
