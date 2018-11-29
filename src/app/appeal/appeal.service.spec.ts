import { getTestBed, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { AppealService } from './appeal.service';
import {AppealFormModel} from './appeal.model';

const SERVICE_URL = '/api';
const AGES = [ '1-12', '12-20', '21 - 30', 'Over the hill' ];
const NICENESS = [ 'naughty', 'nice' ];

fdescribe('Appeal Service', () => {
  let appealService: AppealService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let appealFormModel: AppealFormModel;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppealService]
    });
    injector = getTestBed();
    appealService = injector.get(AppealService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Should return ages object happy path - HttpClient called once', () => {
    appealService.getAgeRanges().subscribe(
      response => expect(response).toEqual(AGES, 'Expected ' + AGES
        + ' but got ' + response),
      fail
    );

    const req = httpMock.expectOne(SERVICE_URL);
    expect(req.request.method).toBe('GET');
    expect(req.request.url).toBe(SERVICE_URL);
    req.flush(AGES);
  });

  it('Should return niceness object happy path - HttpClient called once', () => {
    appealService.getNicenessValues().subscribe(
      response => expect(response).toEqual(NICENESS, 'Expected ' + NICENESS
        + ' but got ' + response),
      fail
    );

    const req = httpMock.expectOne(SERVICE_URL);
    expect(req.request.method).toBe('GET');
    expect(req.request.url).toBe(SERVICE_URL);
    req.flush(NICENESS);
  });

  it('Should return appeal form message happy path, HttpClient called once', () => {
    const successResponse = {message: 'foopa!'};
    appealService.submitForm(appealFormModel).subscribe(response => {
      expect(response).toContain(successResponse);
    });

    const req = httpMock.expectOne(SERVICE_URL);
    expect(req.request.method).toEqual('POST');
    expect(req.request.url).toBe(SERVICE_URL);
    req.flush(successResponse);
  });
});
