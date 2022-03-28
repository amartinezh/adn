import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenteListComponent } from './agente-list.component';

describe('CategoriaListComponent', () => {
  let component: AgenteListComponent;
  let fixture: ComponentFixture<AgenteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('List the information', () => {
    expect(component).toBeTruthy();
  });
});
