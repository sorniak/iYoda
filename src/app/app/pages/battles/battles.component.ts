import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { SwapiService } from '../../services/swapi.service';
import {
  People,
  Starships,
  Fighters,
  fightResults,
  peopleEndPoint,
  starshipsEndPoint,
  baseImages,
  PeopleOrStarshipsWithIcon,
  PeopleOrStarships,
  fakeSwapiResponseStarships,
  fakeSwapiResponsePeople,
  constToLabels
} from '../../shared/consts';


@Component({
  selector: 'app-battles',
  templateUrl: './battles.component.html',
  styleUrls: ['./battles.component.sass']
})
export class BattlesComponent implements OnInit {

  loading = true;
  people: Array<People> = [];
  starships: Array<Starships> = [];
  allObjects: Array<People | Starships> = [];
  fighterOne: PeopleOrStarshipsWithIcon;
  fighterTwo: PeopleOrStarshipsWithIcon;
  fightResult: {
    result: string,
    comparedAttribute: string,
    valueOfAttributeFighterOne: string,
    valueOfAttributeFighterTwo: string
  };
  readonly fightResultsConst = fightResults;
  readonly constToLabels = constToLabels;

  constructor(
    private swapi: SwapiService
  ) {}

  ngOnInit() {
    // this.loading = true;
    // forkJoin(
    //   this.swapi.getAllPagesFromEndPoint(peopleEndPoint),
    //   this.swapi.getAllPagesFromEndPoint(starshipsEndPoint)
    // ).subscribe({ //add timeout?
    //   next: value => {
    //     this.people = value[0];
    //     this.starships = value[1];
    //   },
    //   complete: () => {
    //     this.loading = false;
    //     this.fightResult.result = fightResults.intialFightResultLabel;
    //   },
    //   error: () => this.fightResult.result = fightResults.errorWhileGettingData
    // });



    this.fightResult = {
      result: fightResults.loadingFightingData,
      comparedAttribute: undefined,
      valueOfAttributeFighterOne: undefined,
      valueOfAttributeFighterTwo: undefined
    };

    this.loading = false; //temp
    this.people = fakeSwapiResponsePeople.results; //temp
    this.starships = fakeSwapiResponseStarships.results; //temp
    this.fightResult.result = fightResults.intialFightResultLabel; //temp
  }

  fight() {
    const typeFighters = Fighters[Math.floor(Math.random() * (Fighters.length))];
    switch (typeFighters) {
      case 'People':
        this.getResultOfFight(this.people, 'person', 'mass');
        break;
      case 'Starships':
        this.getResultOfFight(this.starships, 'starship', 'crew');
        break;
    }
  }

  getResultOfFight(
    fighters: PeopleOrStarships[],
    typeOfFighters: string,
    attributeToCompare: string
  ) {
    this.fighterOne = this.randArrayElementWithIcon(fighters, typeOfFighters);
    this.fighterTwo = this.randArrayElementWithIcon(fighters, typeOfFighters);
    if ((attributeToCompare in this.fighterOne) && (attributeToCompare in this.fighterTwo)) {
      if (this.fighterOne[attributeToCompare] === 'unknown' || this.fighterTwo[attributeToCompare] === 'unknown') {
        this.fightResult.result = fightResults.unknownFightResult;
      } else if (parseFloat(this.fighterOne[attributeToCompare]) - parseFloat(this.fighterTwo[attributeToCompare]) > 0) {
        this.fightResult.result = fightResults.winFightResult;
      } else {
        this.fightResult.result = fightResults.lostFightResult;
      }
      this.fightResult.comparedAttribute = attributeToCompare;
      this.fightResult.valueOfAttributeFighterOne = this.fighterOne[attributeToCompare];
      this.fightResult.valueOfAttributeFighterTwo = this.fighterTwo[attributeToCompare];
    }
  }

  randArrayElementWithIcon(
    inputArray: Array<PeopleOrStarships>,
    typeOfFighters: string
  ): PeopleOrStarshipsWithIcon {
    const defaultFightersType = typeOfFighters === 'starship' ? 'defaultShip' : 'defaultPerson';
    const randNumber = Math.floor(Math.random() * inputArray.length);
    const nameOfAttribute = 'name';
    return baseImages[inputArray[randNumber][nameOfAttribute]] ?
      { icon: baseImages[inputArray[randNumber][nameOfAttribute]], ...inputArray[randNumber] } :
      { icon: baseImages[defaultFightersType], ...inputArray[randNumber] };
  }

  keysToLabelFilter(inputObj: PeopleOrStarshipsWithIcon) {
    const result = {};
    let key: string;
    for (key in inputObj) {
      if (inputObj.hasOwnProperty(key) && constToLabels.hasOwnProperty(key)) {
          result[key] = inputObj[key];
      }
    }
    return result;
  }

}
