import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparendoAddComponent } from './comparendo-add.component';

describe('CategoriaAddComponent', () => {
  let component: ComparendoAddComponent;
  let fixture: ComponentFixture<ComparendoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparendoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparendoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
