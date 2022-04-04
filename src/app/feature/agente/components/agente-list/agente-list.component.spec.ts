import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { AgenteListComponent } from './agente-list.component';
import { AgenteSharedService } from '@shared/services/Agente/agente.shared.service';
import { Agente } from '@shared/models/Agente/agente';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AgenteListComponent', () => {
  let component: AgenteListComponent;
  let fixture: ComponentFixture<AgenteListComponent>;
  let agenteService: AgenteSharedService;
  const listaCategoria: Agente[] = [new Agente('86', 'Agente 86', '312334554', 8, 12), new Agente('87', 'Agente 87', '312334554', 14, 22)];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AgenteListComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [AgenteSharedService, HttpService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenteListComponent);
    component = fixture.componentInstance;
    agenteService = TestBed.inject(AgenteSharedService);
    spyOn(agenteService, 'consultar').and.returnValue(
      of(listaCategoria)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.consultar();
    expect(2).toBe(component.agentes.length);
  });
});
