import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { AgenteListComponent } from './agente-list.component';
import { AgenteServiceMock } from '@agente/shared/service/agente.service.mock';
import { Agente } from '@shared/models/Agente/agente';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgenteService } from '@agente/shared/service/agente.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AgenteListComponent', () => {
  let component: AgenteListComponent;
  let fixture: ComponentFixture<AgenteListComponent>;
  let agenteService: AgenteService;
  const listaAgentes: Agente[] = [new Agente('86', 'Super Agente 86', '312334554', 8, 12), new Agente('87', 'Agente 87', '312334554', 14, 22)];
const AgenteMockArray = [new Agente('1', 'Juan', '123', 1, 1),
                                new Agente('2', 'Pablo', '123', 1, 1),
                                new Agente('3', 'Maria', '123', 1, 1)];
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AgenteListComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [HttpService, {
        provide: AgenteService, useClass: AgenteServiceMock
      }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenteListComponent);
    component = fixture.componentInstance;
    agenteService = TestBed.inject(AgenteService);
    fixture.detectChanges();
  });

  it('Debe generar el dialogo de mensaje', () => {
    component.success();
    expect(component.notificacion).toBeDefined();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberá consultar getInformacion', () => {
    const spyGuardar = spyOn(agenteService, 'consultar');
    spyGuardar.and.returnValue(of(AgenteMockArray));
    component.getInformacion();
    expect(spyGuardar).toBeTruthy();
  });

  it('Deberá eliminar un agente existente', () => {
    component.agentes = listaAgentes;
    const spy = spyOn(component, 'eliminar').and.callThrough();
    spyOn(agenteService, 'eliminar').and.returnValue(of(true));
    component.eliminar('86');

    expect(spy).toHaveBeenCalled();
  });

  it('Deberá eliminar un agente inexistente', () => {
    component.agentes = listaAgentes;
    const spy = spyOn(component, 'eliminar').and.callThrough();
    spyOn(agenteService, 'eliminar').and.returnValue(of(true));
    component.eliminar('12');
    expect(spy).toHaveBeenCalled();
  });
});
