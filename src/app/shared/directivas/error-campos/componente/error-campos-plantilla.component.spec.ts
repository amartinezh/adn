import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ErrorCamposPlantillaComponent } from './error-campos-plantilla.component';

describe('ErrorCamposPlantillaComponent', () => {
  let component: ErrorCamposPlantillaComponent;
  let fixture: ComponentFixture<ErrorCamposPlantillaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ErrorCamposPlantillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorCamposPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
