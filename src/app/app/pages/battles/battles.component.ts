import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { People, Starships, Fighters } from '../../shared/consts';

@Component({
  selector: 'app-battles',
  templateUrl: './battles.component.html',
  styleUrls: ['./battles.component.sass']
})
export class BattlesComponent implements OnInit {

  people: Array<People>;
  starships: Array<Starships>;
  fighterOne: People | Starships;
  fighterTwo: People | Starships;

  color = 'primary';
  mode = 'indeterminate';
  value = 50;

  constructor(
    private swapi: SwapiService
  ) { }

  ngOnInit() {
    this.swapi.getPeople().subscribe(data => this.people = data);
    this.swapi.getStarships().subscribe(data => this.starships = data);
  }

  fight() {
    const typeFighters = Fighters[Math.floor(Math.random() * (Fighters.length) ) ];
    console.log(typeFighters);
    switch (typeFighters) {
      case 'People':
        this.fighterOne = randArrayElement(this.people);
        this.fighterTwo = randArrayElement(this.people);
        break;
      case 'Starships':
        this.fighterOne = randArrayElement(this.starships);
        this.fighterTwo = randArrayElement(this.starships);
        break;
    }

  }

}

function randArrayElement(A: Array<Starships | People>): Starships | People {
  return A[Math.floor(Math.random() * A.length)];
}
