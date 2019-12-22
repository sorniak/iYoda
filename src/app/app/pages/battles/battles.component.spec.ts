import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatProgressSpinnerModule, MatCardModule, MatIconModule, MatListModule, MatButtonModule } from '@angular/material';
import { BattlesComponent } from './battles.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {
  fakeSwapiResponseStarships,
  starshipsEndPoint,
  peopleEndPoint,
  fightResults,
  fakeSwapiResponsePeople
} from '../../shared/consts';

describe('BattlesComponent', () => {
  let component: BattlesComponent;
  let fixture: ComponentFixture<BattlesComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [BattlesComponent],
      imports: [
        HttpClientTestingModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatButtonModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create creates component', () => {
    expect(component).toBeTruthy();
  });

  it('has action button with initial label and is disabled', () => {
    expect(component.fightResult.result).toEqual(fightResults.loadingFightingData);
    expect(fixture.nativeElement.querySelector('button').disabled).toBeTruthy();
  });

  describe('initiate component with failed payload', () => {
    beforeEach(() => {
      const backend: HttpTestingController = TestBed.get(HttpTestingController);
      backend.expectOne(peopleEndPoint).error(new ErrorEvent('network error'));
      fixture.detectChanges();
    });

    it('show message failure while network error', () => {
      expect(component.fightResult.result).toEqual(fightResults.errorWhileGettingData);
    });

    it('disables action button while having error', () => {
      expect(fixture.nativeElement.querySelector('button').disabled).toBeTruthy();
    });

    it('hides elements when no data aquicred', () => {
      expect(fixture.nativeElement.querySelector('mat-card')).toBeNull();
      expect(fixture.nativeElement.querySelector('div.display-1')).toBeNull();
    });
  });

  describe('initiate component with proper respond from API', () => {
    beforeEach(() => {
      const backend: HttpTestingController = TestBed.get(HttpTestingController);
      const onePageApiResponseStarships = { ...fakeSwapiResponseStarships, next: null };
      backend.expectOne({
        method: 'GET',
        url: starshipsEndPoint
      }).flush(onePageApiResponseStarships);
      const onePageApiResponsePeople = { ...fakeSwapiResponsePeople, next: null };
      backend.expectOne({
        method: 'GET',
        url: peopleEndPoint
      }).flush(onePageApiResponsePeople);
      component.fight();
      fixture.detectChanges();
    });

    const crew = 'crew';
    const mass = 'mass';

    describe('fight() methods expceted work', () => {
      it('it should randomize one fighter type from fighters', () => {

        expect(component.fighterOne[crew] || component.fighterOne[mass]).toBeTruthy();
      });
    });

    describe('getResultOfFight() methods expceted work', () => {
      it('shows proper result when one fighter wins', () => {
        const expectedResult = fakeSwapiResponsePeople.results[1].name + fightResults.winFightResult;

        spyOn(component, 'randArrayElementWithIcon').and.returnValues(
          { ...fakeSwapiResponsePeople.results[0], icon: '', mass: '10' },
          { ...fakeSwapiResponsePeople.results[1], icon: '', mass: '1211' },
        );

        component.getResultOfFight(
          [fakeSwapiResponsePeople.results[0]],
          'person',
          'mass'
        );

        fixture.detectChanges();
        expect(component.fightResult.result).toEqual(expectedResult);
      });

      it('shows proper result when it is draw between fighters', () => {
        const expectedResult = fightResults.drawFightResult;

        spyOn(component, 'randArrayElementWithIcon').and.returnValues(
          { ...fakeSwapiResponsePeople.results[0], icon: '', mass: '10' },
          { ...fakeSwapiResponsePeople.results[1], icon: '', mass: '10' },
        );

        component.getResultOfFight(
          [fakeSwapiResponsePeople.results[0]],
          'person',
          'mass'
        );

        fixture.detectChanges();
        expect(component.fightResult.result).toEqual(expectedResult);
      });

      it('shows proper result when one fighter has no defined figthing attribute', () => {
        const expectedResult = fightResults.unknownFightResult;

        spyOn(component, 'randArrayElementWithIcon').and.returnValues(
          { ...fakeSwapiResponsePeople.results[0], icon: '', mass: '10' },
          { ...fakeSwapiResponsePeople.results[1], icon: '', mass: 'unknown' },
        );

        component.getResultOfFight(
          [fakeSwapiResponsePeople.results[0]],
          'person',
          'mass'
        );

        fixture.detectChanges();
        expect(component.fightResult.result).toEqual(expectedResult);
      });

      it('shows proper result when both fighters has no defined figthing attribute', () => {
        const expectedResult = fightResults.unknownFightResult;

        spyOn(component, 'randArrayElementWithIcon').and.returnValues(
          { ...fakeSwapiResponsePeople.results[0], icon: '', mass: 'unknown' },
          { ...fakeSwapiResponsePeople.results[1], icon: '', mass: 'unknown' },
        );

        component.getResultOfFight(
          [fakeSwapiResponsePeople.results[0]],
          'person',
          'mass'
        );

        fixture.detectChanges();
        expect(component.fightResult.result).toEqual(expectedResult);
      });
    });

    describe('renders proper data and visuals', () => {
      it('creates and renders cards with data', () => {
        expect(fixture.nativeElement.querySelectorAll('mat-card').length).toEqual(2);
      });

      it('has action button enabled', () => {
        expect(fixture.nativeElement.querySelector('button').disabled).toBeFalsy();
      });

      it('has images paths defined', () => {
        expect(fixture.nativeElement.querySelectorAll('img.mat-card-sm-image')[1].src).toContain('assets/images/');
      });

      it('has pulled the data into view successfully', () => {
        spyOn(component, 'randArrayElementWithIcon').and.returnValues(
          { ...fakeSwapiResponsePeople.results[0], icon: '' },
          { ...fakeSwapiResponsePeople.results[1], icon: '' },
        );

        component.getResultOfFight(
          [fakeSwapiResponsePeople.results[0]],
          'person',
          'mass'
        );

        fixture.detectChanges();

        expect(fixture.nativeElement.querySelectorAll('mat-card-title.mat-card-title')[0].innerText).
          toEqual(fakeSwapiResponsePeople.results[0].name);
        expect(fixture.nativeElement.querySelectorAll('mat-card-title.mat-card-title')[1].innerText).
          toEqual(fakeSwapiResponsePeople.results[1].name);
        expect(fixture.nativeElement.querySelectorAll('div.mat-list-item-content')[1].innerText).
          toContain('eye color: blue');
        expect(fixture.nativeElement.querySelectorAll('div.mat-list-item-content')[7].innerText).
          toContain('eye color: yellow');
      });
    });
  });
});
