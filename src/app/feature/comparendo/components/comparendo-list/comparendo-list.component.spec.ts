import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparendoListComponent } from './comparendo-list.component';

describe('CategoriaListComponent', () => {
  let component: ComparendoListComponent;
  let fixture: ComponentFixture<ComparendoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparendoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparendoListComponent);
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
