import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { AgenteListComponent } from './agente-list.component';
import { AgenteServiceMock } from '@agente/shared/service/agente.service.mock';
import { Agente } from '@shared/models/Agente/agente';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgenteService } from '@agente/shared/service/agente.service';

describe('AgenteListComponent', () => {
  let component: AgenteListComponent;
  let fixture: ComponentFixture<AgenteListComponent>;
  let agenteService: AgenteServiceMock;
  const listaAgentes: Agente[] = [new Agente('86', 'Agente 86', '312334554', 8, 12), new Agente('87', 'Agente 87', '312334554', 14, 22)];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenteListComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [HttpService, AgenteServiceMock, {
        provide: AgenteService, useClass: AgenteServiceMock
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenteListComponent);
    component = fixture.componentInstance;
    agenteService = TestBed.inject(AgenteServiceMock);
    spyOn(agenteService, 'consultar').and.returnValue(
      of(listaAgentes)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
