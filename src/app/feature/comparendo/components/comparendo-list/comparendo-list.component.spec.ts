import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ComparendoListComponent } from './comparendo-list.component';
import { ComparendoSharedService } from '@shared/services/Comparendo/comparendo.shared.service';
import { Comparendo } from '@shared/models/Comparendo/comparendo';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { PosiblesInfractor } from '@shared/models/Comparendo/posibles_infractores';
import { Agente } from '@shared/models/Agente/agente';
import { Categoria } from '@shared/models/Categoria/categoria';
import { ComparendoService } from '@comparendo/shared/service/comparendo.service';

describe('ComparendoListComponent', () => {
  let component: ComparendoListComponent;
  let fixture: ComponentFixture<ComparendoListComponent>;
  let comparendosService: ComparendoSharedService;
  const listaComparendo: Comparendo[] = [new Comparendo('101',
    new PosiblesInfractor('5', 'MCE 563', 13, 10, new Date()),
    new Agente('86', 'Super agente 86', '312454543', 8, 22),
    new Categoria('99', 'Especial'), new Date(), 4000000)];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ComparendoListComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ComparendoSharedService, ComparendoService , HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparendoListComponent);
    component = fixture.componentInstance;
    comparendosService = TestBed.inject(ComparendoSharedService);
    spyOn(comparendosService, 'consultar').and.returnValue(
      of(listaComparendo)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
