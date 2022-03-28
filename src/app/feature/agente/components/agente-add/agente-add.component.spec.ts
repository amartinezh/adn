import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenteAddComponent } from './agente-add.component';

describe('CategoriaAddComponent', () => {
  let component: AgenteAddComponent;
  let fixture: ComponentFixture<AgenteAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenteAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
