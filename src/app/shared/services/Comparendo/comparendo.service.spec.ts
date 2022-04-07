import { of } from 'rxjs';
import { Comparendo } from './../../models/Comparendo/comparendo';
import { ComparendoMockArray } from './../../models/Comparendo/comparendoMock';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from '@core/services/http.service';
import { ComparendoSharedService } from './comparendo.shared.service';
import { TestBed } from '@angular/core/testing';

describe('Comparendos', () => {
  let service: ComparendoSharedService;
  let http: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: ComparendoSharedService, useClass: ComparendoSharedService }, HttpService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    service = TestBed.inject(ComparendoSharedService);
    http = TestBed.inject(HttpService);
  });

  it('should return an Obsevable<boolean>', () => {
    const spyDoDelete = spyOn(http, 'doDelete').and.returnValue(of(true));
    service.eliminar('1').subscribe((res: boolean) => {
      expect(res).toBeTrue();
    });
    expect(spyDoDelete).toHaveBeenCalled();
  });

  it('should return an Obsevable<Comparendo[]>', () => {
    const spyDoGet = spyOn(http, 'doGet').and.returnValue(of(ComparendoMockArray));

    service.consultar().subscribe((res: Comparendo[]) => {
      expect(res).toEqual(ComparendoMockArray);
    });

    expect(spyDoGet).toHaveBeenCalled();
  });

});
