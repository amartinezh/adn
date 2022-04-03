import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CategoriaListComponent } from './categoria-list.component';
import { CategoriaSharedService } from '@shared/services/Categoria/categoria.service';
import { Categoria } from '@shared/models/Categoria/categoria';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';

describe('CategoriaListComponent', () => {
  let component: CategoriaListComponent;
  let fixture: ComponentFixture<CategoriaListComponent>;
  let categoriaService: CategoriaSharedService;
  const listaCategoria: Categoria[] = [new Categoria('101', 'Super camión'), new Categoria('020', 'Camión General')];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaListComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [CategoriaSharedService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaListComponent);
    component = fixture.componentInstance;
    categoriaService = TestBed.inject(CategoriaSharedService);
    spyOn(categoriaService, 'consultar').and.returnValue(
      of(listaCategoria)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.consultar();
    expect(2).toBe(component.categorias.length);
  });
});
