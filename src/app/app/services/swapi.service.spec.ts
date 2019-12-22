import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SwapiService } from './swapi.service';
import { starshipsEndPoint, fakeSwapiResponseStarships } from '../shared/consts';

describe('SwapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
  });

  it('should be created', () => {
    const service: SwapiService = TestBed.get(SwapiService);
    expect(service).toBeTruthy();
  });

  it('SwapiService with single page (i.e. next with no values)', (done) => {
    const service: SwapiService = TestBed.get(SwapiService);
    const backend: HttpTestingController = TestBed.get(HttpTestingController);
    const onePageApiResponse = {...fakeSwapiResponseStarships, next: null};

    service.getAllPagesFromEndPoint(starshipsEndPoint).subscribe( data => {
      expect(data[0]['name']).toEqual('Executor');
      expect(data[0].length).toEqual(fakeSwapiResponseStarships.results[0].length);
      done();
    });

    backend.expectOne({
      method: 'GET',
      url: starshipsEndPoint
    }).flush(onePageApiResponse);

  });

  it('SwapiService with three pages', (done) => {
    const service: SwapiService = TestBed.get(SwapiService);
    const backend: HttpTestingController = TestBed.get(HttpTestingController);
    const firstPageApiResponse = {...fakeSwapiResponseStarships, next: starshipsEndPoint + '?page=2'};
    const secondPageApiResponse = {...fakeSwapiResponseStarships, next: starshipsEndPoint + '?page=3'};
    const thirdPageApiResponse = {...fakeSwapiResponseStarships, next: null};

    service.getAllPagesFromEndPoint(starshipsEndPoint).subscribe( data => {
      expect(data[0]['name']).toEqual('Executor');
      expect(data[10]['starship_class']).toEqual('Deep Space Mobile Battlestation');
      expect(data.length).toEqual(3 * fakeSwapiResponseStarships.results.length);
      done();
    });

    backend.expectOne({
      method: 'GET',
      url: starshipsEndPoint
    }).flush(firstPageApiResponse);

    backend.expectOne({
      method: 'GET',
      url: starshipsEndPoint + '?page=2'
    }).flush(secondPageApiResponse);

    backend.expectOne({
      method: 'GET',
      url: starshipsEndPoint + '?page=3'
    }).flush(thirdPageApiResponse);

  });
});
